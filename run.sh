#! /bin/sh

DAEMON="node building.js"
NAME=Building
DESC=Building
PIDFILE="building.pid"

case "$1" in
  start)
        echo "Starting $DESC: "
        nohup $DAEMON >> info.log 2>&1 &
        echo $! > $PIDFILE
        echo "$NAME."
        ;;
  status)
        ps aux | grep node
        ;;
  stop)
        echo "Stopping $DESC: "
        pid=`cat $PIDFILE`
        kill $pid
        rm $PIDFILE
        echo "$NAME."
        ;;
    esac

    exit 0
