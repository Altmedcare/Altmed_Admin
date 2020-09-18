import React, { PureComponent } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Modal,
  Icon,
  Tooltip,
  Row,
  Upload,
  message,
  Col
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./style.less";
const Dragger = Upload.Dragger;
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === "image/jpeg";
  if (!isJPG) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJPG && isLt2M;
}

class UploadForm extends PureComponent {
  state = {
    loading: false,
    fileList: [],
    uploading: false
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: [
      {
        uid: "-1",
        name: "xxx.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      }
    ]
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: [
      {
        uid: "-1",
        name: "xxx.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      }
    ]
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });
  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append("files[]", file);
    });

    this.setState({
      uploading: true
    });

    // You can use any AJAX library you like
    reqwest({
      url: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      method: "post",
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false
        });
        message.success("upload successfully.");
      },
      error: () => {
        this.setState({
          uploading: false
        });
        message.error("upload failed.");
      }
    });
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file]
        }));
        return false;
      },
      fileList
    };

    return (
      <PageHeaderWrapper
        title="Upload"
        content="Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload too"
      >
       
          <div className="gutter-example">
            <Row gutter={10}>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
              >
                <div className="gutter-box avatar-list-avant">
                  <Card
                    
                    title="Upload by Clicking"
                    bordered={true}
                    style={{ marginBottom: "20px" }}
                  >
                    <div>
                      <p>
                        Classic mode. File selection dialog pops up when upload
                        button is clicked.
                      </p>
                      <Upload {...props}>
                        <Button>
                          <Icon type="upload" /> Click to Upload
                        </Button>
                      </Upload>
                    </div>
                  </Card>
                </div>
                <div className="gutter-box avatar-list-avant">
                  <Card
                    
                    title="Drag and Drop"
                    bordered={true}
                    style={{ marginBottom: "20px" }}
                  >
                    <div>
                      <p>
                        You can drag files to a specific area, to upload.
                        Alternatively, you can also upload by selecting.
                      </p>
                      <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                          <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                          Support for a single or bulk upload. Strictly prohibit
                          from uploading company data or other band files
                        </p>
                      </Dragger>
                    </div>
                  </Card>
                </div>
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
              >
                <div className="gutter-box avatar-list-avant">
                  <Card
                    
                    title="Pictures wall"
                    bordered={true}
                    style={{ marginBottom: "20px" }}
                  >
                    <div>
                      <p>
                        After users upload picture, the thumbnail will be shown
                        in list. The upload button will disappear when count
                        meets limitation.
                      </p>
                      <div className="clearfix">
                        <Upload
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          listType="picture-card"
                          fileList={fileList}
                          onPreview={this.handlePreview}
                          onChange={this.handleChange}
                        >
                          {fileList.length >= 3 ? null : uploadButton}
                        </Upload>
                        <Modal
                          visible={previewVisible}
                          footer={null}
                          onCancel={this.handleCancel}
                        >
                          <img
                            alt="example"
                            style={{ width: "100%" }}
                            src={previewImage}
                          />
                        </Modal>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="gutter-box avatar-list-avant">
                  <Card
                    
                    title="Upload directory"
                    bordered={true}
                    style={{ marginBottom: "20px", minHeight:222 }}
                  >
                    <div>
                      <p>You can select and upload a whole directory.</p>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        directory
                      >
                        <Button>
                          <Icon type="upload" /> Upload Directory
                        </Button>
                      </Upload>
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
       
      </PageHeaderWrapper>
    );
  }
}

export default UploadForm;
