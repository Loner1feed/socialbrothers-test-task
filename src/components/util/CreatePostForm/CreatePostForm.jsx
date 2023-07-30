import React, { useEffect, useState } from 'react';
import { ContentCard } from '../../ui/ContentCard/ContentCard';
import './createPostForm.style.scss';
import { CustomInput } from '../../ui/CustomInputs/CustomInput';
import { Form, message } from 'antd';
import { CustomSelect } from '../../ui/CustomInputs/CustomSelect';
import { ApiService } from '../../../services/ApiService';
import { CustomFile } from '../../ui/CustomInputs/CustomFile';
import { CustomTextArea } from '../../ui/CustomInputs/CustomTextArea';
import { CustomButton } from '../../ui/CustomButton/CustomButton';

export const CreatePostForm = () => {

  const [categories, setCategories] = useState([]);

  const [form] = Form.useForm();

  const onFinish = ({title, content, category, image}) => {
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category_id", category);
    formData.append("image", image[0].originFileObj);

    ApiService.setPost(formData).then((res) => {
      message.success("Bericht succesvol gemaakt")
    }).catch(() => {
      message.error("Fout opgetreden")
    })
  }

  useEffect(() => {
    ApiService.getCategories().then((res) => {
      if (res.data) {
        setCategories(res.data.map((el) => ({
          label: el.name,
          value: el.id
        })));
      }
    })
  }, []);

  useEffect(() => {
    console.log(categories)
  }, [categories]);

  return (
    <ContentCard>
      <div className="createPostForm">
        <h2 className="createPostForm__title">Plaats een blog bericht</h2>
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          onFinish={onFinish}
        >
          <Form.Item
            name="title"
            label="Berichtnaam"
            rules={[{ required: true, message: "Berichtnaam is vereist" }]}
          >
            <CustomInput placeholder="Geen titel" />
          </Form.Item>

          <Form.Item
            name="category"
            label="Categorie"
            rules={[{ required: true, message: "Categorie is vereist" }]}
          >
            <CustomSelect
              placeholder="Geen categorie"
              options={categories}
            />
          </Form.Item>

          <Form.Item  
            name="image"
            label="Header afbeelding"
            valuePropName="fileList"
            getValueFromEvent={(event) => event?.fileList}
            rules={[{ required: true, message: "Header afbeelding is vereist" }]}
          >
            <CustomFile action="/upload.do" maxCount={1} />
          </Form.Item>

          <Form.Item  
            name="content"
            label="Bericht"
            rules={[{ required: true, message: "Bericht is vereist" }]}
          >
            <CustomTextArea />
          </Form.Item>

          <Form.Item>
            <CustomButton htmlType="submit">Bericht aanmaken</CustomButton>
          </Form.Item>
        </Form>
      </div>
    </ContentCard>
  )
}
