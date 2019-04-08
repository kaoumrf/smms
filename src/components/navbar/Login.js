import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Checkbox, Modal
} from 'antd';

class Login extends Component {
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

  render() {
    const { getFieldDecorator } = this.props.form;
    const { visible, loading  } = this.state;

    return (
      <div>
        <Button  onClick={this.showModal}>
        Login
      </Button>
      <Modal
        title="Se connecter"
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
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Se souvenir</Checkbox>
          )}
          <a className="login-form-forgot" href="/">Mot de passe oublié</a> &nbsp;
          {/*<Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>*/}
          Ou &nbsp;<a href="/">S'inscrire!</a>
        </Form.Item>
      </Form>
      </Modal>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;