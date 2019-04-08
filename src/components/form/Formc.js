import React from 'react';
import 'antd/dist/antd.css';
import './Formc.css';
import {
  Form, Input, Tooltip,  Button,
} from 'antd';


class Formc extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
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
   

    const { TextArea } = Input;
   
    return (
      <div className="formcontainer"> 
      <h4 className="lbl ">Nous contacter</h4>
      <Form  className="f"{...formItemLayout} onSubmit={this.handleSubmit}>
       
      <Form.Item label="Nom"
      > 
        
          {getFieldDecorator('nom', { 
                rules: [{ required: true, message: 'champ obligatoire champ obligatoire veuillez introduire votre nom!' }],
              })(
                <Input placeholder="Votre nom*" />
              )}
        </Form.Item>
       
       
        <Form.Item label="Prénom"
          
          > 
          
            {getFieldDecorator('prenom', { 
                  rules: [{ required: true, message: 'champ obligatoire champ obligatoire veuillez introduire votre prénom!' }],
                })(
                  <Input placeholder="Votre prénom*" />
                )}
          </Form.Item>
         
       
       
        <Form.Item
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'E-mail!',
            }, {
              required: true, message: 'champ obligatoire veuillez introduire votre E-mail!',
            }],
          })(
            <Input placeholder="Email" />
          )}
        </Form.Item>
       
        <Form.Item
          label={(
            <span>
              Société&nbsp;
              <Tooltip title="Commment s'appelle vote société?">
               </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('societe', {
            rules: [{ required: true, message: 'champ obligatoire veuillez introduire votre société!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        
        
        <Form.Item label={(
            <span>
              Sujet&nbsp;
              <Tooltip title="C'est quoi votre sujet?">
               </Tooltip>
            </span>
          )}>  

        {getFieldDecorator('sub', { 
          rules: [{ required: true, message: 'champ obligatoire veuillez introduire votre sujet!' }],
        })(
          <Input placeholder="Sujet*" />
        )}
        </Form.Item> 


    <Form.Item label={(
            <span>
              Message&nbsp;
             
            </span>
          )}
      
      >
        {getFieldDecorator('msg', { 
          rules: [{ required: true, message: 'champ obligatoire veuillez introduire votre message!' }],
        })(
          
          <div>
          
            <TextArea placeholder="Message(min:2 lignes  maximaum:6 lignes)"autosize={{ minRows: 2, maxRows: 6 }} />
          </div>
        )}
      </Form.Item>

            
        
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="Envoyer">Envoyer</Button>
            </Form.Item>
          </Form>
          </div>
        );
      }
    }

const WrappedFormc  = Form.create({ name: 'Envoyer' })(Formc );
export default Form.create()(Formc);
