---
uid: api.6d9c7ec99218355148790e8a0fe2a4e7f71703268732eff4570b08f3e0bba2ed
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.Event.HandleInHub"
source: xml
reviewed: bcca5a8e33ddfe663292e3c8410c9704517278ef0b51095ad947f0c07705ac15
title: "HandleInHub"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Marks this event as handled in the current hub only.

## Remarks

Hub handling stops remaining listeners in the current hub but does not affect following hubs.

**Exception `T:System.InvalidOperationException`:** Thrown when called outside a valid hub dispatch context for this event.
