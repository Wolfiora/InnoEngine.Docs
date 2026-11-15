---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.38e7f52e1cda630d1d8c008df49e93b59f063d696de81058ae9c0da300f1c39d
symbol: scripting:Inno.Core.Events:E:InnoEngine.Events.EventDispatcher.dispatched
title: EventDispatcher.dispatched
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
reviewed: 9faa311b1295fa869acfcbb1970320bf0746f6d67cb7d201d81e592394ed913f
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Observes an event after its ordered hub dispatch has completed, including globally consumed events.

## Remarks

Observers run synchronously on the dispatching thread and do not participate in consumption. They must not change consumption or call HandleInHub. Observer failures propagate to the caller. Owners must unsubscribe before retiring their callbacks or extensions.
