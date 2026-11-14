---
uid: api.6d9c7ec99218355148790e8a0fe2a4e7f71703268732eff4570b08f3e0bba2ed
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.Event.HandleInHub"
source: xml
reviewed: 83a131a30c8dfb4e4816f84fdcaf25ee1fd36e4bf7fe52d473b190e8090467da
title: "Event.HandleInHub"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Marks this event as handled in the current hub only.

## Remarks

Hub handling stops remaining listeners in the current hub but does not affect following hubs.

**Exception `T:System.InvalidOperationException`:** Thrown when called outside a valid hub dispatch context for this event.
