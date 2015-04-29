.. contents::

======
OLIF Example Project
======

Information
===========
.. image:: https://travis-ci.org/olif-fm/olif-scaffold.svg?branch=master
    :target: https://travis-ci.org/olif-fm/olif-scaffold

OLIF Example Project

Install dependencies
--------------------

::

    cd olif/

Install composer:

::

    curl -sS https://getcomposer.org/installer | php
    mv composer.phar /usr/local/bin/composer

Install composer dependencies:

::

    composer install

Install git submodules:

::

    ./git-submodule.sh

Update git submodules:

::

    git submodule update --init --recursive

See [LINK TO DOCS] to configure PHP settings
