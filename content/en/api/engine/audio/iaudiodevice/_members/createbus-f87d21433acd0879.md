---
uid: api.f87d21433acd0879f5fef3dcf678c1a371528e7398767cacc7607a2251a05369
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.CreateBus(Inno.Audio.AudioBusId,Inno.Audio.AudioBusHandle)"
source: xml
reviewed: 7f17bc83423c3e25cc3a51dc21b88c8047e081d10094a81a79d5a68fb63ca21c
title: "CreateBus"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates one bus routed to a parent bus.

**Parameter `id`:** Stable semantic bus identifier.

**Parameter `parent`:** Parent bus, or an invalid handle when creating the master bus.

**Returns:** A bus handle owned by the current device generation.
