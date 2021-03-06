import React ,{ useState } from "react";
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';



function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class MultipleImageUploader extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [ ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  // let l = this.state.fileList

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    console.log(this.state.fileList)
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <>
        <Upload
          action="#"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
    );
  }
}

export default MultipleImageUploader;











// const MultipleImageUploader = () => {
//   const [previewVisible, setPreviewVisible] = useState(false)
//   const [previewImage, setPreviewImage] = useState("")
//   const [previewTitle, setPreviewTitle] = useState("")
//   const [fileList, setFileList] = useState([])
  

  
//   function getBase64(file) {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = error => reject(error);
//     });
//   }
//   const handleCancel = () => setPreviewVisible(false);

  
//   const handlePreview = async file => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }

//     setPreviewImage(file.url || file.preview,);
//     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
//     setPreviewVisible(true);

//   };

//   const handleChange = ({ fileList }) => setFileList({ fileList });
//   // const { previewVisible, previewImage, fileList, previewTitle } = this.state;
//     const uploadButton = (
//       <div>
//         <PlusOutlined />
//         <div style={{ marginTop: 8 }}>Upload</div>
//       </div>
//     );
//   return (
//     <>
//     <Upload
//       action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//       listType="picture-card"
//       fileList={fileList}
//       onPreview={handlePreview}
//       onChange={handleChange}
//     >
//       {fileList.length >= 8 ? null : uploadButton}
//     </Upload>
//     <Modal
//       visible={previewVisible}
//       title={previewTitle}
//       footer={null}
//       onCancel={handleCancel}
//     >
//       <img alt="example" style={{ width: '100%' }} src={previewImage} />
//     </Modal>
//   </>
//   )
// }

// export default MultipleImageUploader;






// {
//   uid: '-1',
//   name: 'image.png',
//   status: 'done',
//   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
// }
    


