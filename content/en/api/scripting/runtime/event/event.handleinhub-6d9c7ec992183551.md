---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6d9c7ec99218355148790e8a0fe2a4e7f71703268732eff4570b08f3e0bba2ed
symbol: scripting:Inno.Core.Events:M:InnoEngine.Events.Event.HandleInHub
title: Event.HandleInHub
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
reviewed: 0ccdb61d61372b92db27f079bb57779491678af026d9ab241e4fc3291c46c12d
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Hub handling stops remaining listeners in the current hub but does not affect following hubs.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when called outside a valid hub dispatch context for this event.
