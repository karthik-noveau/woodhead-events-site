import { Button, Form, Input } from "antd";
import emailjs from "@emailjs/browser";
import { v4 as uuidv4 } from "uuid";

import "./style.override.css";
import { useEffect, useRef, useState } from "react";

const SERVICE_ID = "service_un9tyzb";
const TEMPLATE_ID = "template_ensm8al";
const PUBLICK_KEY = "YP-g34Pu1ZK4OB0bU";

export const FormValidation = ({ className }) => {
  const buttonValue = "Submit";
  const buttonSubmitValue = "Mail Sent";

  const [buttonText, setButtonText] = useState("Submit");
  let formRef = useRef(null);
  const uniqueId = uuidv4();

  const onFinish = (values) => {
    setButtonText("Sending...");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, `#sui-form-${uniqueId}`, {
        publicKey: PUBLICK_KEY,
      })
      .then(
        () => {
          setButtonText("Mail Sent");
          setTimeout(() => {
            setButtonText("Submit");
          }, 2000);
        },
        (error) => {
          setButtonText("Mail not send");
          setTimeout(() => {
            setButtonText("Submit");
          }, 4000);
        }
      );
  };
  const onFinishFailed = (errorInfo) => {};

  return (
    <Form
      name="basic"
      id={`sui-form-${uniqueId}`}
      ref={formRef}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
      className="formValidation"
    >
      <Form.Item
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input placeholder="First name" name="firstName" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter your Email Id!",
            type: "email",
          },
        ]}
      >
        <Input placeholder="Email Id" name="email" />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please enter your Phone number!",
          },
        ]}
      >
        <Input placeholder="Phone number" name="phoneNumber" />
      </Form.Item>

      <Form.Item
        name="subject"
        rules={[
          {
            required: true,
            message: "Please enter your Subject!",
          },
        ]}
      >
        <Input placeholder="Subject" name="subject" />
      </Form.Item>

      <Form.Item
        name="message"
        rules={[
          {
            required: true,
            message: "Please enter your Message!",
          },
        ]}
      >
        <Input.TextArea
          placeholder="Tell us about yourself..."
          name="message"
        />
      </Form.Item>

      <Form.Item className="btn">
        <Button type="primary" htmlType="submit">
          {buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};
