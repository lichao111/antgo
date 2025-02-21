import os
import sys
import copy
from typing import Any
import uuid
import pathlib
import numpy as np
from .build import build_eagleeye_env


class CoreOp(object):
    is_finish_import_eagleeye = False
    def __init__(self, func_op_name, **kwargs):
        if '_' in func_op_name:
            a,b = func_op_name.split('_')
            func_op_name = f'{a.capitalize()}{b.capitalize()}'
        self.func_op_name = func_op_name
        self.op_id = str(uuid.uuid4())

        self.param_1 = dict()   # {"key": [float,float,float,...]}
        self.param_2 = dict()   # {"key": ["","","",...]}
        self.param_3 = dict()   # {"key": [[float,float,...],[],...]}

        for var_key, var_value in kwargs.items():
            if isinstance(var_value, list) or isinstance(var_value, tuple):
                if len(var_value) > 0:
                    if isinstance(var_value[0], str):
                        self.param_2[var_key] = var_value
                    elif isinstance(var_value[0], list):
                        temp = np.array(var_value).astype(np.float32).tolist()
                        if len(temp.shape) == 1:
                            self.param_3[var_key] = temp
                    else:
                        self.param_1[var_key] = np.array(var_value).astype(np.float32).tolist()
            elif isinstance(var_value, np.ndarray):
                if len(var_value.shape) == 1:
                    self.param_1[var_key] = var_value.astype(np.float32).tolist()
                elif len(var_value.shape) == 2:
                    self.param_3[var_key] = var_value.astype(np.float32).tolist()
                else:
                    print(f'Dont support {var_key}')
                    print(var_value)
            elif isinstance(var_value, str):
                self.param_2[var_key] = var_value
            else:
                self.param_1[var_key] = [float(var_value)]

    def __call__(self, *args):
        # 准备eagleeye环境，并加载
        if not CoreOp.is_finish_import_eagleeye:
            build_eagleeye_env()
            CoreOp.is_finish_import_eagleeye = True
        import eagleeye

        input_tensors = []
        for tensor in args:
            if isinstance(tensor, str):
                print(f'Concert str {tensor} to numpy mode')
                tensor = np.frombuffer(tensor.encode('utf-8'), dtype=np.uint8)
            assert(isinstance(tensor, np.ndarray))
            input_tensors.append(tensor)

        output_tensors = eagleeye.op_execute(self.func_op_name, self.op_id, self.func_op_name, self.param_1, self.param_2,self.param_3, input_tensors)
        return output_tensors if len(output_tensors) > 1 else output_tensors[0]
