using { CAP_on_AWS.db as db } from '../db/data-model';
using { ECEmploymentInformation as external } from './external/ECEmploymentInformation';

service CatalogService
{
    entity Computers as
        projection on db.Computers;

    entity getEmpJob as projection on external.EmpJob;
}