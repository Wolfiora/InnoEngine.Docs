---
uid: api.cb1758b17a1b39d6eb1a4dd3cdd41a6d4007a59d7b6efaea386d43cec1271d8e
symbol: "engine:Inno.Core.Events:E:Inno.Core.Events.EventDispatcher.dispatched"
source: xml
reviewed: c8ae82f6cb5313df8806d721b940e8b67a03ec97ba82f7a946d84ad7148e7ace
title: "dispatched"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Observes an event after its ordered hub dispatch has completed, including globally consumed events.

## Remarks

Observers run synchronously on the dispatching thread and do not participate in consumption. They must not change consumption or call HandleInHub. Observer failures propagate to the caller. Owners must unsubscribe before retiring their callbacks or extensions.
