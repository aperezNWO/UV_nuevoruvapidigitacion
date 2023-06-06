export interface LogEntry {
  id_Column   :string;
  pageName    :string;
  accessDate  :string;
  ipValue     :string;
}
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

export class DynamicForm
{
    //
    constructor(
        public GRUPO         : string | undefined
    ,   public OPCION        : string | undefined
    ,   public VALOR         : string | undefined
    ,   public DESC_VALOR    : string | undefined
    ,   public ID_PMT_OPCION : number | undefined
    ,   public OP_ID         : number | undefined
    ,   public TIPO_DATO     : string | undefined
    ,   public MS_COMBO      : number | undefined
    ,   public MS_PADRE      : number | undefined
    ,   public MS_CONDI      : string | undefined

    )
    {
        //
    }
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