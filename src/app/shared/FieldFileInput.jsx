import React, { Component } from "react";

export default class FieldFileInput extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     file: null,
  //     image: ""
  //   };
  //   this.onChange = this.onChange.bind(this);
  // }
  // onFormSubmit(e) {
  //   e.preventDefault();
  //   this.fileUpload(this.state.image);
  // }
  // onChange(e) {
  //   let files = e.target.files || e.dataTransfer.files;
  //   if (!files.length) return;
  //   this.createImage(files[0]);
  // }
  // createImage(file) {
  //   let reader = new FileReader();
  //   reader.onload = e => {
  //     this.setState({
  //       image: e.target.result
  //     });
  //   };
  //   reader.readAsDataURL(file);
  // }
  // fileUpload(image) {
  //   const url = "http://localhost:8000/api/fileupload";
  //   const formData = { file: this.state.image };
  //   return post(url, formData).then(response => console.log(response));
  // }
  // onChange(e) {
  //   const {
  //     input: { onChange }
  //   } = this.props;
  //   this.setState({
  //     file: URL.createObjectURL(e.target.files[0])
  //   });
  //   onChange(e.target.files[0]);
  // }
  // render() {
  //   const {
  //     input: { value }
  //   } = this.props;
  //   const { input, label, required, meta } = this.props; //whatever props you send to the component from redux-form Field
  //   return (
  //     <div>
  //       <label>{label}</label>
  //       <div>
  //         <input
  //           type="file"
  //           accept=".jpg, .png, .jpeg"
  //           onChange={this.onChange}
  //         />
  //         <img src={this.state.file} />
  //       </div>
  //     </div>
  //   );
  // }
}
