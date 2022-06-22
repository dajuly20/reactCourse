#!/bin/bash
tmux new-session \; \
   send-keys 'live-server public/'  C-m \; \
   split-window -h -c "#{pane_current_path}" \; \
   send-keys 'babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch' C-m \; \
   split-window -v -c "#{pane_current_path}" \; \
   send-keys 'code .' C-m \; \;
