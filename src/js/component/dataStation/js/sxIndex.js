$(function () {
    $("#carousel_1").FtCarousel();
    $(".index-governance-table-td").on("click",function () {
        $(".index-governance-table-td").removeClass("governance-active");
        $(this).addClass("governance-active")
    })

    $(".index-dataAsset-table td").on("mouseover",function () {
        $(this).children('img').addClass("xuanzhun");
    })

    $(".index-dataAsset-table td").on("mouseleave",function () {
        $(this).children('img').removeClass("xuanzhun");
    })


    $('td[href*="#"]:not([href="#"])').click(function() {
        var mid=$(this).attr("href");
        var target=$(mid)
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    });

    var capabilityEl=$('.index-capability-tab-active');
    capabilityTabClick(capabilityEl,0);
})

function menuClick(el) {
    $("span").removeClass("menu-active");
    $(el).addClass("menu-active");
}

function  capabilityTabClick(el,type) {
    debugger;
    var capablicityData=[
        {
            data:["FTP资源","数据库资源","HDFS资源"],
            content:[
                "为满足租户使用需求，通过FTP/SFTP协议以文件形式将数据中台台采集整合的明细/模型/标签数据下发给租户使用，支撑各省经营分析、数据建模、内外数据应用建设。",
                "数据集成（Data Integration），简称 CDP ，是阿里对外提供的稳定高效、弹性伸缩的数据同步平台。 为阿里云大数据计算引擎（包括MaxCompute、AnalyticDB、OSS）提供离线（批量）数据进出通道。",
                "Hadoop 分布式文件系统是世界上最可靠的文件系统。HDFS可以再大量硬件组成的集群中存储大文件。它的设计原则是趋向于存储少量的大文件，而不是存储大量的小文件。即使在硬件发生故障的时候，HDFS也能体现出它对数据存储的可靠性。它支持高吞吐量的平行访问方式。"
            ]
        },
        {
            data:["数据商品","标签服务","分场景视图","API服务"],
            content:[
                "通过一站式数据发布工具，对数据封装过程中的模型定义、服务配置、数据安全、销售属性各环节进行整合封装为简单易用的一站式发布流程，标准化数据集可快速发布为数据服务 <br>1.开发者在线提交接受数据的目标源、周期<br>2.平台定期推送数据至开发者库<br>3.监控到推送任务异常可工单报障<br>4.用量用尽或时间到期后续订",
                "统一标签管理规范，量化追踪标签质量；积累用户标签和用户画像资产，赋能业务随需随取",
                "政企视图，家庭视图，小CEO视图",
                "适用标准化数据输入输出，支撑产品开发的场景，开发者遵循API出入参数自主选择时间、数据量和数据，灵活性高<br>1.开发者直接订购数据套餐<br>2.按照API参数自由调用<br>3.调用异常返回错误值可工单报障<br>4.用量用尽或时间到期后续订"
            ]
        },
        {
            data:["自助报表","交互式探索","数据集成工具"],
            content:[
                "自助报表工具是针对商业智能应用领域、面向公司内部开发人员和行业最终用户使用的可视化快速构建平台。<br>通过数据源、数据集创建数据模型,在仪表板以拖拽控件构建分析报告,BI同时提供完整并且严格的权限控制机制,可实现用户间快捷分享数据和报告。",
                "交互式探索为用户提供数据分析操作平台和相应配置及管理维护平台。前台支持用户以探索式数据分析（EDA）为基本方式对数据进行深入分析，提供多种分析工具，使用户以更加直观及丰富的视图来展示结果，",
                "数据集成主要包括元数据管理、数据稽核、云化ETL等模块，实现高性能、安全可靠、批&流一体的异构数据的集成、整合服务，为客户灵活的数据消费需求提供强有力的技术驱动，为企业提供一体化数据整合服务。"
            ]
        },
        {
            data:["模型广场","挖掘工具"],
            content:[
                "数据集成（Data Integration），简称 CDP ，是阿里对外提供的稳定高效、弹性伸缩的数据同步平台。 为阿里云大数据计算引擎（包括MaxCompute、AnalyticDB、OSS）提供离线（批量）数据进出通道。",
                "智能引擎是一款大数据分析挖掘工具，它能够以简单、便捷的方式实现数据探索、数据建模、场景应用等分析挖掘方面的工作"
            ]
        },
        {
            data:["客户级","用户级"],
            content:[
                "",
                ""
            ]
        }
        ]
    $("div").removeClass("index-capability-tab-active");
    $(el).addClass("index-capability-tab-active");
    var html="";
    var width="";
    var clas="capability-img";
    var datas=capablicityData[type];
    if(datas.data.length==2){
        width="50%";
        clas="capability-img2";
    }else if(datas.data.length==3){
        width="33.3%";
    }else if(datas.data.length==4){
        width="25%";
    }



    html+='<tr>';
    for(var i=0;i<datas.content.length;i++){
        var img=i%2+1;
        if(type==2||type==0||type==1||type==4){
            img=(type+1)+''+i;
            if(type==1&&i==0){
                img=i%2+1
            }
        }
        html+='<td style="width: '+width+'">';
        html+='<div class="capability-table-title">'+datas.data[i]+'</div>';
        html+='<div>'+datas.content[i]+'</div>';
        if(type==4){
            html+='<img onclick="linkHtml()" style="cursor: pointer;" src="images/sx/capability-bg'+img+'.png" class="'+clas+'">';
        }else {
            html+='<img src="images/sx/capability-bg'+img+'.png" class="'+clas+'">';
        }
        html+='</td>';
    }
    html+='</tr>';
    $('#capabilityTable').html(html);
}

function linkHtml() {
    window.open("./taskMonitor.html")
}

function dataAssetClick(el) {
    $("td").removeClass("index-dataAsset-tab-active");
    $(el).addClass("index-dataAsset-tab-active");
}