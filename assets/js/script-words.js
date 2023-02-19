window.onload = function (argument) {
  var skills =
    "DevOps French Nextcloud SSH Prometheus Grafana Rocky InfluxDB IPS AlmaLinux Prometheus Nginx Linux DevOps CSS Caddy JavaScript Support C# Linux DellEMC DellEMC PHP Caddy Prometheus AlmaLinux CentOS SQL SSH Nginx Nextcloud OTRS SSH ZFS CSS Caddy Zammad Windows CyberSecurity IDS Bash MS Zammad Virtualization Windows Rocky MariaDB Ubuntu Windows C# MySQL Caddy IPS IDS CentOS Support Nginx C# Server Nextcloud Nextcloud Linux Jenkins Proxmox Server Datacenter Cyber Bash OpenStack Pearl Proxmox SQL Pearl Debian Cyber DevOps Redhat RaspberryPi Powershell Ansible Debian Linux Traeffic Flutter IntelliJ Adobe Hardware Scripting Automation Postfix Sendmail DNS Bind9 Samba NFS CIFS Github Gitlab OpenStack Fail2Ban Cloudflare GoogleCloud AWS Nvidia Cuda DGX HPC Ceph Gluster BeeGFS ZFS Icinga Zabbix Nagios Zoom Teams Citrix VMware Proxmox OpenVZ KVM Squid IOS macOS computer science Python Java MongoDB ElasticSearch";
  var words = {};
  var words_attr = [];
  string_handle(skills);

  var canvas = document.getElementById("c");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (canvas.getContext) {
    var c = canvas.getContext("2d"),
      w = canvas.width,
      h = canvas.height;

    c.strokeStyle = "red";
    c.fillStyle = "white";
    c.lineWidth = 5;

    Word = function (key) {
      this.text = key;
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.font = words[key] * 15 + "px arial";
      this.speed = words[key] / 3;
    };
    for (key in words) {
      words_attr.push(new Word(key));
    }
    console.log(words_attr.length);

    function animation() {
      for (var i = 0; i < words_attr.length; i++) {
        c.font = words_attr[i].font;
        c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
        words_attr[i].width = c.measureText(words_attr[i].text).width;
        c.stroke();
      }
      move();
    }

    function move() {
      for (var i = 0; i < words_attr.length; i++) {
        if (words_attr[i].x > w) {
          words_attr[i].x = -words_attr[i].width;
          words_attr[i].y = Math.random() * h;
        } else {
          words_attr[i].x += words_attr[i].speed;
        }
      }
    }

    setInterval(function () {
      c.clearRect(0, 0, w, h);
      animation();
    }, 24);
  }

  function string_handle(str) {
    var split_str = str.split(" ");
    var word_array = [];
    var word_count = [];
    for (var i = 0; i < split_str.length; i++) {
      check = true;
      for (var j = 0; j <= word_array.length; j++) {
        if (split_str[i] == word_array[j]) {
          word_count[j]++;
          check = false;
          break;
        }
      }
      if (check) {
        word_array.push(split_str[i]);
        word_count.push(1);
      }
    }
    for (var i = 0; i < word_array.length; i++) {
      words[word_array[i]] = word_count[i];
    }
    return words;
  }
};
