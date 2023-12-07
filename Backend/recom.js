// import PythonShell
const { PythonShell } = require('python-shell')
var path = "./popularity_based_recom_sys.py"


async function runReccomendedModel(interest) {
    // let recommendedUsers;

    let options = {
        scriptPath: path,
        args: [interest]
    }

    const { success, err = '', results } = await new Promise(
        (resolve, reject) => {
            PythonShell.run("../popularity_based_recom_sys.py", options, (err, results) => {
                if (err) reject({ success: false, err });
                if (results) {
                    resolve({ success: true, results });
                }
            })
        }
    );

    // console.log('recommendedUsers', results)
    return results
}
module.exports = runReccomendedModel
// py ma sys.argv[index]  ane import sys
