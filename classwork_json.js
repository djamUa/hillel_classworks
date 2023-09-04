const { writeFile, readFile } = require('fs');

const path = './json_classwork5.json'

readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    const parsedData = JSON.parse(data);
    parsedData.createdAt = new Date().toISOString();
    writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
      if (err) {
        console.log('Failed to write updated data to file');
        return;
      }
      console.log('Updated file successfully');
    });
  });
const { writeFile, readFile } = require('fs');
