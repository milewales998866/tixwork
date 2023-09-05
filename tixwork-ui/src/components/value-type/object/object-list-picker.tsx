import ObjectUtils from '@/utils/object-utils';
import { PlusOutlined } from '@ant-design/icons';
import { ProFormItem } from '@ant-design/pro-components';
import { Typography } from 'antd';
import _ from 'lodash';
import { ObjectListTable } from './object-list-table';
import type { ObjectPickerType } from './object-picker';
import type { ObjectPickerFieldType } from './object-picker-field';
import ObjectPickerField from './object-picker-field';
import styles from './styles.less';

const LinkTarget = (props) => {
  const { onClick, disabled } = props;
  return (
    <div className={styles.linkTarget}>
      <Typography.Link onClick={onClick} disabled={disabled}>
        <PlusOutlined />
        添加
      </Typography.Link>
    </div>
  );
};

const ObjectListPickerField = (props: ObjectPickerFieldType) => {
  const { onChange, allDuplicates = false, value = [] } = props;
  const handleAdd = (record, all) => {
    const result = ObjectUtils.parseToArray(value);
    if (record && (allDuplicates || !_.find(result, record))) {
      result.push(record);
    }
    if (onChange) {
      onChange(_.clone(all || result));
    }
  };
  return (
    <ObjectPickerField {...props} onChange={handleAdd} target={LinkTarget}>
      <ObjectListTable />
    </ObjectPickerField>
  );
};
export default function ObjectListPicker(props: ObjectPickerType) {
  const { label, value, fields, linkToUrl, objectType, width, fieldProps, allDuplicates, proFieldKey, ...rest } = props;

  return (
    <ProFormItem label={label} {...rest} className="customized-form-item">
      <ObjectListPickerField {...props} {...props.fieldProps} />
    </ProFormItem>
  );
}
