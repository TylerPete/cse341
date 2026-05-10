// const mongodb = require(

const getData = async (req, res, next) => {
    //send hardcoded object with professional attributes needed

    const dataObj = {}

    dataObj.professionalName = "professionalName"
    dataObj.base64Image = "base64Image"
    dataObj.primaryDescription = "primaryDescription"
    dataObj.workDescription1 = "workDescription2"
    dataObj.linkTitleText = "linkTitleText"
    dataObj.nameLink = {
        firstName: "firstName",
        url: "#"
    };
    dataObj.linkedInLink = {
        text: "text",
        link: "link"
    };
    dataObj.githubLink = {
        text: "text",
        link: "link"
    }

    return dataObj;
};


module.exports = { getData }