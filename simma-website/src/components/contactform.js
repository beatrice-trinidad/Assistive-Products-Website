import React from "react";

import "./contactform.css"
import {
    unstable_useFormState as useFormState,
    unstable_Form as Form,
    unstable_FormLabel as FormLabel,
    unstable_FormInput as FormInput,
    unstable_FormMessage as FormMessage,
    unstable_FormSubmitButton as FormSubmitButton,
  } from "reakit/Form";

import { Grid, Row, Col } from 'react-flexbox-grid';


const ContactForm = () => {
    const form = useFormState({
      values: { message: "", name: "" },
      onValidate: (values) => {
        if (!values.message) {
          var errors = {
            message: "Please enter a message.",
          };
          throw errors;
        }

        if (!values.name) {
          errors = {
            name: "How can we be friends without knowing your name?",
          };
          throw errors;
        }
      },

      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <Form {...form} className="contact__form presentation__center">
        
        <Row xs={12} md={12} lg={12}>
          <FormLabel name="name">
            Name
          </FormLabel >
        </Row>

        <Row xs={12} md={12} lg={12}>
          <FormInput {...form} name="name" placeholder="Type your name" />
        </Row>

        <Row xs={12} md={12} lg={12}>
          <FormMessage {...form} name="name" />
        </Row>
        
        <Row xs={12} md={12} lg={12}>
          <FormLabel name="email">
            Email
          </FormLabel >
        </Row>

        <Row xs={12} md={12} lg={12}>
          <FormInput {...form} name="email" placeholder="Type your email" type="email" />
        </Row>

        <Row xs={12} md={12} lg={12}>
          <FormMessage {...form} name="email" />
        </Row>
        

        <Row xs={12} md={12} lg={12}>
          <FormLabel {...form} name="message">
            Message
          </FormLabel>
        </Row>
        
        <Row xs={12} md={12} lg={12}>
          <FormInput
            {...form}
            name="message"
            placeholder="Type here what would you like to contact me about"
            as="textarea"
          />
        </Row>
        

        <Row xs={12} md={12} lg={12} >
          <FormMessage {...form} name="message" />
        </Row>

        <Row xs={12} md={12} lg={12} >
          <FormSubmitButton {...form}>Submit</FormSubmitButton>
        </Row>
      </Form>
    );
  }


export default ContactForm