
import { logger } from "../utils/logger";
export const queryHandlerTest = async (...args: any): Promise<any> => {
  const serializeArgs = args[0]
  const query = serializeArgs[0].replace(/(\r\n|\n|\r)/gm, " ")
  const params = serializeArgs[1]

  logger.info('queryHandlerTest', { query, params })
  let queryFound: any = { res: {}, message: 'Dont found' }
  keyQuerys.forEach((key: string): any => {
    // logger.info('key', { query, key })
    if (query.includes(key)) {
      queryFound = responseQuerys.filter((response: any) => response.key === key)
    }
  });
  logger.info('queryFound.res', { queryFound: queryFound[0] })
  return await queryFound[0]

};


const keyQuerys = [
  'INSERT INTO backendengineertyba.user',
  'INSERT INTO backendengineertyba.log',
  'SELECT * FROM backendengineertyba.user where email'
]

const responseQuerys = [
  {
    key: 'SELECT * FROM backendengineertyba.user where email',
    res: {
      rows: []
    }
  },
  {
    key: 'INSERT INTO backendengineertyba.user',
    res: {
      rows: [
        {
          id: Math.floor(Math.random() * 10000),
          name: 'Ed',
          phone: '3016453021',
          email: `ed@gmail.com`,
          address: 'Calle 44 # 105-10',
          city: 'Medellin',
          password: ''
        }
      ]
    }
  },
  {
    key: 'INSERT INTO backendengineertyba.log',
    res: {
      rows: [
        {
          id: Math.floor(Math.random() * 10000),
          data: {},
          type: 'log'
        }
      ]
    }
  }
]