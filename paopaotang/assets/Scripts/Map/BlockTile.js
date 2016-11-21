cc.Class({
    extends: cc.Component,

    properties: {
       block:cc.Prefab ,
    },

    // use this for initialization
    onLoad: function () {
        this.blocks = [
            [
                [0,0,0,6,0,0,0,16,17,6],
                [0,17,0,0,0,0,0,0,0,6],
                [0,16,0,0,0,6,0,0,17,16],
                [0,0,0,0,0,6,0,0,17,16],
                [16,17,0,0,0,6,0,0,17,16],
                [0,0,0,0,6,0,0,0,17,16],
                [0,0,0,0,0,6,6,0,0,0],
                [16,17,0,0,6,0,0,0,17,6],
                [6,0,0,0,0,6,6,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0]
            ],
             [
                [0,0,0,6,0,0,0,16,17,6],
                [0,17,0,0,0,0,0,0,0,6],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,6,0,16,0],
                 [0,0,0,0,0,0,0,0,0,0]
                
            ],
             [
                [0,0,0,6,0,0,0,16,17,6],
                [0,17,0,0,0,0,0,0,0,6],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,6,0,16,0],
                 [0,0,0,0,0,0,0,0,0,0]
            ],
             [
                [0,0,0,6,0,0,0,16,17,6],
                [0,17,0,0,0,0,0,0,0,6],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,6,0,16,0],
                 [0,0,0,0,0,0,0,0,0,0]
            ],
             [
                [0,0,0,6,0,0,0,16,17,6],
                [0,17,0,0,0,0,0,0,0,6],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,0,0,17,16],
                [0,16,0,0,0,6,6,0,16,0],
                 [0,0,0,0,0,0,0,0,0,0]
            ]
        ]
    },


     //手动创建tileMap背景层
    initBlockByPass:function(pass,node)
    {
        let blockInfo = this.blocks[pass];
        let len = blockInfo.length ;
        for(var i = 0 ; i < len ; i ++)
        {
            let leng = blockInfo[i].length ;
            for(var j = 0 ; j < leng ; j ++)
            {
                var style = blockInfo[j][i] ;
                if(style == 0 ){
                    continue;
                }
                var block  = cc.instantiate(this.block);
                block.parent = node ;
                var nodeCode = block.getComponent("Block");
                nodeCode.setBoxStyle(style);
                nodeCode.setPostion(i,j);
            }
        }
    }
});