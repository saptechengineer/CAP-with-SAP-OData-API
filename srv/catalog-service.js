const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {


    const EmpJobSRV = await cds.connect.to('ECEmploymentInformation');

    const { EmpJob } = EmpJobSRV.entities;       

//  Custom Handler
    this.on('READ', "getEmpJob", async (req) => {

        try {
            
            let empInfo = await EmpJobSRV.tx(req).run(
                SELECT.from(EmpJob, ["userId"]).where({ division: 'MANU' }).limit(5, 0)
            ).catch((e) => {
                console.log(e.message);
                return req.error({ code: 501, message: e.message });
            });

            console.log(empInfo);
            return(empInfo);
        }
        catch (e) {
            return req.error({ code: 500, message: e.message });
        }

    })
})