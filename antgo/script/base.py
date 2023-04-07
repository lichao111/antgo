import os
import json
import logging


def prepare_extra_config(task_name, project_info):
    # 根据当前的任务种类（supervised, semi-supervised, distillation, activelearning）
    # 自动使用项目信息补充任务的额外配置，（如数据）
    # 复合任务标记
    extra_config = {}
    if task_name == "supervised":  
        # 扩展数据源 (有监督训练，仅涉及标签数据和伪标签数据)
        # label, pseudo-label
        extra_config['source'] = {
            "label": project_info["dataset"]["train"]["label"],
            "pseudo-label": project_info["dataset"]["train"]["pseudo-label"],
        }
    elif task_name == "activelearning":
        if len(project_info['tool']['activelearning']['config']) == 0:
            logging.error(f"Missing {task_name} config, couldnt launch task")
            return None

        # 扩展数据源 (主动学习仅涉及无标签数据)
        # unlabel
        extra_config['source'] = {
            "unlabel": project_info["dataset"]["train"]["unlabel"]
        }

        # 扩展模型配置/优化器/学习率等
        extra_config.update(project_info['tool']['activelearning']['config'])  
    elif task_name == "semi-supervised":
        if len(project_info['tool']['semi']['config']) == 0:
            logging.error(f"Missing {task_name} config, couldnt launch task")
            return None

        # 扩展数据源（半监督学习涉及，标签数据，伪标签数据和无标签数据）
        # label, pseudo-label, unlabel
        extra_config['source'] = {
            "label": project_info["dataset"]["train"]["label"],
            "pseudo-label": project_info["dataset"]["train"]["pseudo-label"] if "pseudo-label" in project_info["dataset"]["train"] else [],
            "unlabel": project_info["dataset"]["train"]["unlabel"] if "unlabel" in project_info["dataset"]["train"] else []
        }

        # 扩展模型配置/优化器/学习率等
        extra_config.update( project_info['tool']['semi']['config'])
    elif task_name == "distillation":
        if len(project_info['tool']['distillation']['config']) == 0:
            logging.error(f"Missing {task_name} config, couldnt launch task")
            return None

        # 扩展数据源 (蒸馏学习涉及，标签数据，伪标签数据)
        # label, pseudo-label, unlabel
        extra_config['source'] = {
            "label": project_info["dataset"]["train"]["label"],
            "pseudo-label": project_info["dataset"]["train"]["pseudo-label"],
        }

        # 扩展模型配置/优化器/学习率等
        extra_config.update( project_info['tool']['distillation']['config'])

    return extra_config
