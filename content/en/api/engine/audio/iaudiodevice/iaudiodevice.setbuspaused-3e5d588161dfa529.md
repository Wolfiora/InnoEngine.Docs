---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3e5d588161dfa52905b741cfcd6ca34358fbb3244db50380936f53f40456daf3
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioDevice.SetBusPaused(Inno.Audio.AudioBusHandle,System.Boolean)
title: IAudioDevice.SetBusPaused
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 565f897411de5eea3ad6c74310d9f98edfd65d200fd92f00d10edd16996776c5

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Updates pause state for one bus and its routed voices.

## Parameters

**Parameter `bus`:** Bus owned by the current device generation.

**Parameter `paused`:** Whether routed voices should pause.

## Returns

`true` when the bus was updated.
