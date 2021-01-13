#!/usr/bin/env sh

set -e

yarn build

yarn deploy:server
