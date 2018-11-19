#后台启动项目，即使窗口关闭也在，如果要关闭项目就用stop.ps1

$processmain={
    $processng={
        param($dir)
        Trap{'NGSERVE ERROR';Get-Process *node* | Stop-Process;break;}
        cd ($dir+'\bunny-read');
        ng serve
    }
    
    $processpy={
        param($dir)
        Trap{'PYSERVE ERROR';Get-Process *python* | Stop-Process;break;}
        python ($dir+'\bunnydb\server.py')
    }
    
    $processjar={
        param($dir)
        Trap{'NGSERVE ERROR';Get-Process *node* | Stop-Process;break;}
        java -jar ($dir+'\crawler-1.1-SNAPSHOT.jar')
    }

    'bunny-read path: '+$args[0]
    $job1 = Start-Job $processng -ArgumentList ($args[0]).Path
    $job2 = Start-Job $processpy -ArgumentList ($args[0]).Path
    $job3 = Start-Job $processjar -ArgumentList ($args[0]).Path

    rcjb ($job1,$job2,$job3) -Wait
}

rcjb (sajb $processmain -ArgumentList (pwd)) -Wait | Write-Host -ForegroundColor Yellow
