---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2de3f638e81d389fd45c38ef579f8f5801f037a45e5c567bd33733ed85993987
symbol: engine:Inno.Audio:M:Inno.Audio.IAudioBlockProcessorDevice.AddBlockProcessor(Inno.Audio.AudioBusHandle,Inno.Audio.AudioProcessorConfiguration,Inno.Audio.AudioBlockProcessor)
title: IAudioBlockProcessorDevice.AddBlockProcessor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: b1051d38c841b074c8834c304e7bdb9d420030a7a5e24a1f3a3fb57f65f31880
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `bus`:** The live bus belonging to this device.

**Parameter `configuration`:** The immutable configuration for this effect.

**Parameter `processor`:** The processor transferred to the bus only on success.

## Returns

Whether the device accepted ownership of the processor.
