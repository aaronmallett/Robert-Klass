# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

$bootstrap = <<SCRIPT
apt-get update
apt-get install -y apache2 vim wget git curl
rm -rf /var/www
ln -fs /vagrant /var/www

curl -sL https://deb.nodesource.com/setup | sudo bash -
apt-get install -y nodejs build-essential

npm install bower -g

SCRIPT

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.hostname = 'neith'
  config.vm.box='hashicorp/precise64'
  config.vm.network :private_network, ip: '192.168.50.4'
  config.vm.network 'forwarded_port', guest: 9000, host: 9000
  config.vm.provision 'shell', inline: $bootstrap

end