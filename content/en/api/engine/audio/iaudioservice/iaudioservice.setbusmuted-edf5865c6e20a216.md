---
uid: api.edf5865c6e20a2164bf36e5f9142e21129767f93ca5f49364f8b20107685675e
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioService.SetBusMuted(Inno.Audio.AudioBusId,System.Boolean)"
source: xml
reviewed: 41e6e9698a748277fabfc916ae7d93b88a39deb6262fcf9c8017cf951d413338
title: "IAudioService.SetBusMuted"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Updates mute state for a semantic mixer bus.

## Parameters

**Parameter `bus`:** Stable bus identifier.

**Parameter `muted`:** Whether output from the bus is silenced.

## Returns

`true` when the bus exists and was updated.
