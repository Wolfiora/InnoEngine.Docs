---
uid: api.f87d21433acd0879f5fef3dcf678c1a371528e7398767cacc7607a2251a05369
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.CreateBus(Inno.Audio.AudioBusId,Inno.Audio.AudioBusHandle)"
source: xml
reviewed: d1c0d39d8374159a8d347381d79e087750bf7323156dd4b9937e9a505b0c0dce
title: "CreateBus"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates one bus routed to a parent bus.

**Parameter `id`:** Stable semantic bus identifier.

**Parameter `parent`:** Parent bus, or an invalid handle when creating the master bus.

**Returns:** A bus handle owned by the current device generation.
