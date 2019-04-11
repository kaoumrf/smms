import React, { Component } from 'react';
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Modal, Button, AutoComplete,
  } from 'antd';
  
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
  const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      }],
    }],
  }];
  
  class RegistrationForm extends Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
      visible: false,
      loading: false,
      confirmLoading: false,
    };
    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    handleSubmit = (e) => {
        this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
    handleCancel = () => {
        this.setState({ visible: false });
      }
        
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
  
    handleWebsiteChange = (value) => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
      const { visible, loading  } = this.state;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      );
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));
  
      return (
        <div>
        <Button  onClick={this.showModal}>S'inscrire</Button>
        <Modal
          title="Inscription"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
              <Button key="back" onClick={this.handleCancel}>Retour</Button>,
              <Button key="submit" type="primary" loading={loading} onClick={this.handleSubmit}>
                Confirmer
              </Button>,
            ]}
        >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'Inserer un email valide!',
              }, {
                required: true, message: 'Inserer votre email!',
              }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="Mot de passe"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Inserer un mot de passe!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </Form.Item>
          <Form.Item
            label="Confirmer mot de passe"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Confirmer le mot de passe!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>
          <Form.Item
            label={(
              <span>
                Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Inserer votre surenom!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="Adresse"
          >
            {getFieldDecorator('residence', {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
            })(
              <Cascader options={residences} />
            )}
          </Form.Item>
          <Form.Item
            label="Telephone"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Inserer votre numéro de téléphone!' }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </Form.Item>
          <Form.Item
            label="Site web"
          >
            {getFieldDecorator('website', {
              rules: [{ required: true, message: 'Inserer votre site web!' }],
            })(
              <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
                placeholder="website"
              >
                <Input />
              </AutoComplete>
            )}
          </Form.Item>
          <Form.Item
            label="Captcha"
            extra="Vous n'etes pas un robot, pas vraie? "
          >
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(
                  <Input />
                )}
              </Col>
              <Col span={12}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox className="nav">J'ai lu <a href="/" className="nav">l'agreement</a></Checkbox>
            )}
          </Form.Item>
          {/*<Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
            </Form.Item>*/}
        </Form>
        </Modal>
        </div>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  export default WrappedRegistrationForm;