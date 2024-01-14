# Getting Started
👋 Hello from ACloudGuruji.com 🙋
Welcome to CAP on AWS Project3 (CAP with SAP OData API)
- Understand the CAP project structure
- Download the required .EDMX file from API.sap.com and place it under srv/external/
- Understand package.json project dependencies
- Run the Execution Steps below

# Project Structure : File or Folder | Purpose
---------|----------
- `app/` | content for UI frontends goes here
- `db/` | your domain models and data go here
- `srv/` | your service models and code go here
- `srv/external` | Here put your .edmx file and generate the .csn file
- `package.json` | project metadata and configuration
- `readme.md` | this getting started guide

## Next Steps

- Open a new terminal go to srv/external/.edmx file path and run `cds import` 
- Open a new terminal and run `npm install` 
- Open a new terminal and run `cds watch` 
- (in VS Code simply choose **Terminal** > Run Task > cds watch)

## Learn More

Learn more at https://acloudguruji.com/courses/cap-on-aws/
