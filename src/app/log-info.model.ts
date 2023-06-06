//
export class  SearchCriteria
{
    //
    constructor(
        public    P_DATA_SOURCE_ID   : string,
        public    P_ID_TIPO_LOG      : string,
        public    P_ROW_NUM          : string,
        public    P_FECHA_INICIO     : string,
        public    P_FECHA_FIN        : string,
        public    P_FECHA_INICIO_STR : string,
        public    P_FECHA_FIN_STR    : string  
    )
    {
        //
    }
}

export interface DynamicForm
{
       GRUPO         : string | undefined;
       OPCION        : string | undefined;
       VALOR         : string | undefined;
       DESC_VALOR    : string | undefined;
       ID_PMT_OPCION : number | undefined;
       OP_ID         : number | undefined;
       TIPO_DATO     : string | undefined;
       MS_COMBO      : number | undefined;
       MS_PADRE      : number | undefined;
       MS_CONDI      : string | undefined;
}
/*
    {"GRUPO":"Folios y anexos de la Declaracion "
    ,"OPCION":"Por favor relacione la cantidad de anexos, soportes y folios que hacen parte de la declaración"
    ,"VALOR":"0"
    ,"DESC_VALOR":null
    ,"ID_PMT_OPCION":131
    ,"OP_ID":0
    ,"TIPO_DATO":"E"
    ,"MS_COMBO":null
    ,"MS_PADRE":null
    ,"MS_CONDI":null}
*/