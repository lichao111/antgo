# -*- coding: UTF-8 -*-
# @Time    : 2022/9/11 23:01
# @File    : __init__.py.py
# @Author  : jian<jian@mltalker.com>
from __future__ import division
from __future__ import unicode_literals
from __future__ import print_function
from .data_collection import DataCollection, DataFrame
from .entity import Entity
from .image import *
from .common import *
from antgo.pipeline.hparam import HyperParameter as State

from antgo.pipeline.hparam import param_scope
from antgo.pipeline.hparam import dynamic_dispatch
from antgo.pipeline.functional.common.config import *
import numpy as np

read_camera = DataCollection.read_camera
read_video = DataCollection.read_video


@dynamic_dispatch
def glob(*arg):  # pragma: no cover
    """
    Return a DataCollection of paths matching a pathname pattern.
    """

    index = param_scope()._index
    if index is None:
        return DataCollection.from_glob(*arg)
    return DataFrame.from_glob(*arg).map(lambda x: Entity(**{index: x}))


@dynamic_dispatch
def video_dc(*args):
    index = param_scope()._index
    if index is None:
        return DataCollection.read_video(*args)
      
    return DataFrame.read_video(*args).map(lambda x: Entity(**{index: x}))


@dynamic_dispatch
def camera_dc(*args):
    index = param_scope()._index
    if index is None:
        return DataCollection.read_camera(*args)
      
    return DataFrame.read_camera(*args).map(lambda x: Entity(**{index: x}))


def _api():
  """
  Create an API input, for building RestFul API or application API.
  """
  return DataFrame.api(index=param_scope()._index)


api = dynamic_dispatch(_api)


def _web():
  return DataFrame.web(index=param_scope()._index)


web = dynamic_dispatch(_web)


def _dc(iterable):
  """
  Return a DataCollection.
  """

  index = param_scope()._index
  if index is None:
    return DataCollection(iterable)
  if isinstance(index, (list, tuple)):
    return DataFrame(iterable).map(lambda x: Entity(**dict(zip(index, x))))
  return DataFrame(iterable).map(lambda x: Entity(**{index: x}))


dc = dynamic_dispatch(_dc)


def _placeholder(*arg):
  index = param_scope()._index

  # 
  if isinstance(index, tuple):
    for ii,xx in zip(index, arg):
      
      data_type = -1
      if xx.dtype == np.float32:
        data_type = 6
      elif xx.dtype == np.int32:
        data_type = 4
      elif xx.dtype == np.uint8:
        data_type = 1

      if data_type < 0:
        print('placeholder type abnormal.')
      
      add_op_info(
        f'PlaceholderOp_{pos_i}', 
        (None, (ii,)), 
        (), 
        {
          'memory_type': 2,     # CPU_BUFFER
          'data_format': 1000,  # AUTO
          'data_type': data_type,        # EAGLEEYE_UCHAR, EAGLEEYE_FLOAT
          'shape': list(xx.shape),  # 
        }
      )

    return DataFrame.placeholder(*arg).map(lambda x: Entity(**{ii: xx for ii, xx in zip(index, x) }))
  else:
    for ii, xx in zip([index], arg):
      data_type = -1
      if xx.dtype == np.float32:
        data_type = 6
      elif xx.dtype == np.int32:
        data_type = 4
      elif xx.dtype == np.uint8:
        data_type = 1

      if data_type < 0:
        print('placeholder type abnormal.')
      
      add_op_info(
        f'PlaceholderOp', 
        (None, (ii,)), 
        (), 
        {
          'memory_type': 2,               # CPU_BUFFER
          'data_format': 1000,            # AUTO
          'data_type': data_type,         # EAGLEEYE_UCHAR, EAGLEEYE_FLOAT
          'shape': list(xx.shape),        # 
        }
      )

    return DataFrame.placeholder(*arg).map(lambda x: Entity(**{index: x }))

placeholder = dynamic_dispatch(_placeholder)
