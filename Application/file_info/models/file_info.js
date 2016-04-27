/**
* Created by Mkoa
*/
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('file_info',{
                md5: {
                        type: DataTypes.CHAR(32),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: 'md5校验'
                      },
                chunks: {
                        type: DataTypes.INTEGER(20),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '总分块数'
                      },
                chunk: {
                        type: DataTypes.INTEGER(20),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '第几分块'
                      },
                file_size: {
                        type: DataTypes.INTEGER(20),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '文件大小'
                      }}, {
        tableName:'mkoa_file_info',
        comment: '文件信息表',
        timestamps:true,
        indexes:[],
        paranoid:false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
};