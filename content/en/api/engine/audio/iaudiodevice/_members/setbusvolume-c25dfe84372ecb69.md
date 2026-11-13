---
uid: api.c25dfe84372ecb69bd9961b34d2357c774da930e875517527f6cc7924ac0e098
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioDevice.SetBusVolume(Inno.Audio.AudioBusHandle,System.Single)"
source: xml
reviewed: 150c350ae2a197c4a35fad45c039be1da787b6db1484b1015cec30860e6b7092
title: "SetBusVolume"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Updates linear gain for one bus.

**Parameter `bus`:** Bus owned by the current device generation.

**Parameter `volume`:** Non-negative linear gain.

**Returns:** `true` when the bus was updated.
