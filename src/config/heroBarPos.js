
/**
 ** @Author:pandayu
 ** @Version:1.0
 ** @DateTime:2018-09-09
 ** @Project:pandaCard CardGame
 ** @Contact: QQ:815099602
 **/
 /**
 */
var xBase = -40;
var yBase = 210;
var combatCfg ={
    zorder:{
        bloodBar:100,
        dmg:99,
        buff:98,
        hurtEfft:97,
        bullet:2000,
        popWindows:2001,
        loseDlg:2002
    },
    xBase:0,
    yBase:210,
    moveSpeed:90,//移动速度，单位像素/秒，
    moveTime:3,//背景移动时间，单位秒
    moveOutTime:3,//挑战boss成功后，士兵移除场景的时间，单位秒
    scaleRole:[1,1,1,1,1,1,1,1],//角色模型缩放
    heroRunTime:1, //士兵由屏幕外按照既定的位置跑入场景需要的时间，单位秒
    enemyRunTime:1, //小怪由屏幕外按照既定的位置跑入场景需要的时间，单位秒
    moveLeftBar:320,
    moveRightBar:320,
    heroPos:[//
        cc.p(xBase+140,yBase+360),
        cc.p(xBase+140,yBase+200),
        cc.p(xBase+80,yBase+280),
        cc.p(xBase+80,yBase+440),
        cc.p(xBase+80,yBase+120)
    ],
    pvpEnemyPos:[//
        cc.p(xBase+560,yBase+360),
        cc.p(xBase+560,yBase+200),
        cc.p(xBase+600,yBase+440),
        cc.p(xBase+600,yBase+280),
        cc.p(xBase+600,yBase+120)
    ],
    enemyPos4:[[//
        cc.p(xBase+560,yBase+360),
        cc.p(xBase+560,yBase+200),
        cc.p(xBase+600,yBase+440),
        cc.p(xBase+600,yBase+280),
        cc.p(xBase+600,yBase+120)
    ],[//
        cc.p(xBase+560,yBase+440),
        cc.p(xBase+560,yBase+280),
        cc.p(xBase+600,yBase+120),
        cc.p(xBase+600,yBase+360),
        cc.p(xBase+600,yBase+200)
    ]],
    enemyPos5:[[//
        cc.p(xBase+560,yBase+360),
        cc.p(xBase+560,yBase+200),
        cc.p(xBase+600,yBase+440),
        cc.p(xBase+600,yBase+280),
        cc.p(xBase+600,yBase+120)
    ],[//
        cc.p(xBase+560,yBase+440),
        cc.p(xBase+560,yBase+280),
        cc.p(xBase+600,yBase+120),
        cc.p(xBase+600,yBase+360),
        cc.p(xBase+600,yBase+200)
    ]],
    enemyPos6:[[//
        cc.p(xBase+520,yBase+360),
        cc.p(xBase+560,yBase+360),
        cc.p(xBase+560,yBase+200),
        cc.p(xBase+520,yBase+120),
        cc.p(xBase+600,yBase+440),
        cc.p(xBase+600,yBase+280),
        cc.p(xBase+600,yBase+120)
    ],[//
        cc.p(xBase+520,yBase+360),
        cc.p(xBase+600,yBase+360),
        cc.p(xBase+600,yBase+200),
        cc.p(xBase+520,yBase+120),
        cc.p(xBase+560,yBase+440),
        cc.p(xBase+560,yBase+280),
        cc.p(xBase+560,yBase+120)
    ]],
    enemyPos7:[[//
        cc.p(xBase+520,yBase+360),
        cc.p(xBase+560,yBase+360),
        cc.p(xBase+560,yBase+200),
        cc.p(xBase+520,yBase+120),
        cc.p(xBase+600,yBase+440),
        cc.p(xBase+600,yBase+280),
        cc.p(xBase+600,yBase+120)
    ],[//
        cc.p(xBase+520,yBase+360),
        cc.p(xBase+600,yBase+360),
        cc.p(xBase+600,yBase+200),
        cc.p(xBase+520,yBase+120),
        cc.p(xBase+560,yBase+440),
        cc.p(xBase+560,yBase+280),
        cc.p(xBase+560,yBase+120)
    ]],
    enemyBossPos:[[//
        cc.p(xBase+520,yBase+360),
        cc.p(xBase+560,yBase+360),
        cc.p(xBase+560,yBase+200),
        cc.p(xBase+520,yBase+120),
        cc.p(xBase+600,yBase+440),
        cc.p(xBase+600,yBase+120)
    ],[//
        cc.p(xBase+560,yBase+360),
        cc.p(xBase+600,yBase+360),
        cc.p(xBase+600,yBase+200),
        cc.p(xBase+600,yBase+120),
        cc.p(xBase+560,yBase+440),
        cc.p(xBase+560,yBase+120)
    ]],
    bossPos:[
        cc.p(xBase+600,yBase+280),
        cc.p(xBase+560,yBase+280)
    ],
    fortifications:['sandbags','stone','iron'],
    fortiPos:[40,-50],//第一个为x,整数向左；第二个为y，正数向上
    machineGunPos:[160,yBase+70,190,310]//机枪x坐标，机枪y坐标，子弹x偏移，子弹y偏移
}