require('shelljs/global');

try {
	hexo.on('deployAfter', function() {//當deploy完成後執行備份
		run();
	});
} catch (e) {
	console.log("產生了一個錯誤<(￣3￣)> !，錯誤詳情爲：" + e.toString());
}

function run() {
	if (!which('git')) {
		echo('Sorry, this script requires git');
		exit(1);
	} else {
		echo("======================Auto Backup Begin===========================");
		cd('/f/hexo/blog');    //此處修改爲Hexo根目錄路徑
		if (exec('git add --all').code !== 0) {
			echo('Error: Git add failed');
			exit(1);
		}
		if (exec('git commit -am "Form auto backup script\'s commit"').code !== 0) {
			echo('Error: Git commit failed');
			exit(1);
		}
		if (exec('git push origin backup').code !== 0) {
			echo('Error: Git push failed');
			exit(1);
		}
		echo("==================Auto Backup Complete============================")
	}
}