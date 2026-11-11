---
title: "MiniAudioContext"
description: "Reference for MiniAudioContext in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.f90eae4c1a703608
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MiniAudioContext`

This reference describes `MiniAudioContext` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`, `System.IAsyncDisposable`.

## Nested types

- [`MiniAudioContext.Constants`](miniaudiocontext.constants.md)
- [`MiniAudioContext.RawApi`](miniaudiocontext.rawapi.md)

## Members

| Member | Kind |
| --- | --- |
| [`Field: NativeLibraryName`](member-field--nativelibraryname-227fb0799415c7fe.md) | 1 declarations |
| [`Method: BiquadConfigInit`](member-method--biquadconfiginit-f7c4234cac267e8a.md) | 1 declarations |
| [`Method: BiquadNodeConfigInit`](member-method--biquadnodeconfiginit-ce964e5677ec5bef.md) | 1 declarations |
| [`Method: Bpf2ConfigInit`](member-method--bpf2configinit-c1083be152b6edaa.md) | 1 declarations |
| [`Method: BpfConfigInit`](member-method--bpfconfiginit-77ee4b8f734625e4.md) | 1 declarations |
| [`Method: BpfNodeConfigInit`](member-method--bpfnodeconfiginit-fc5210865d423787.md) | 1 declarations |
| [`Method: CalculateBufferSizeInFramesFromMilliseconds`](member-method--calculatebuffersizeinframesfrommilliseconds-097e0c931156b662.md) | 1 declarations |
| [`Method: CalculateBufferSizeInMillisecondsFromFrames`](member-method--calculatebuffersizeinmillisecondsfromframes-d3efaa33d9c00c3d.md) | 1 declarations |
| [`Method: ContextConfigInit`](member-method--contextconfiginit-691d6dbb1a4cc3a8.md) | 1 declarations |
| [`Method: ContextSizeof`](member-method--contextsizeof-65165cc74c3ea31e.md) | 1 declarations |
| [`Method: DataConverterConfigInit`](member-method--dataconverterconfiginit-b23fd162edfcb7ce.md) | 1 declarations |
| [`Method: DataConverterConfigInitDefault`](member-method--dataconverterconfiginitdefault-0a194a7c5e2c0408.md) | 1 declarations |
| [`Method: DataSourceConfigInit`](member-method--datasourceconfiginit-9ae6a865d1b0c5d2.md) | 1 declarations |
| [`Method: DecoderConfigInit`](member-method--decoderconfiginit-600b3afdacd48c5b.md) | 1 declarations |
| [`Method: DecoderConfigInitDefault`](member-method--decoderconfiginitdefault-5db8172e5043d14f.md) | 1 declarations |
| [`Method: DecodingBackendConfigInit`](member-method--decodingbackendconfiginit-9ce9b6b3cf63d654.md) | 1 declarations |
| [`Method: DelayConfigInit`](member-method--delayconfiginit-3a712d4546f4be3b.md) | 1 declarations |
| [`Method: DelayNodeConfigInit`](member-method--delaynodeconfiginit-b51b41830289814b.md) | 1 declarations |
| [`Method: DeviceConfigInit`](member-method--deviceconfiginit-d1e33e3ad3e46ee4.md) | 1 declarations |
| [`Method: DeviceJobThreadConfigInit`](member-method--devicejobthreadconfiginit-66df46f0f0281418.md) | 1 declarations |
| [`Method: Dispose`](member-method--dispose-a4ae6ee4cd25c898.md) | 1 declarations |
| [`Method: DisposeAsync`](member-method--disposeasync-8e8d8a746889e715.md) | 1 declarations |
| [`Method: EncoderConfigInit`](member-method--encoderconfiginit-cee6e566232dd99c.md) | 1 declarations |
| [`Method: EngineConfigInit`](member-method--engineconfiginit-91b60a1232132d83.md) | 1 declarations |
| [`Method: FaderConfigInit`](member-method--faderconfiginit-299fbc7b001b072a.md) | 1 declarations |
| [`Method: FromProvider`](member-method--fromprovider-ed483b0b268114f6.md) | 1 declarations |
| [`Method: GainerConfigInit`](member-method--gainerconfiginit-e6e3a2a5bb22a6cd.md) | 1 declarations |
| [`Method: GetBytesPerSample`](member-method--getbytespersample-7619e56627a8bfaa.md) | 1 declarations |
| [`Method: Hishelf2ConfigInit`](member-method--hishelf2configinit-9daae1c80b1f95a0.md) | 1 declarations |
| [`Method: HishelfNodeConfigInit`](member-method--hishelfnodeconfiginit-250bc785c0d8c57e.md) | 1 declarations |
| [`Method: Hpf1ConfigInit`](member-method--hpf1configinit-d4b3e003b65b43bc.md) | 1 declarations |
| [`Method: Hpf2ConfigInit`](member-method--hpf2configinit-d269c5fe029dafdc.md) | 1 declarations |
| [`Method: HpfConfigInit`](member-method--hpfconfiginit-543b9b87d0ee15c0.md) | 1 declarations |
| [`Method: HpfNodeConfigInit`](member-method--hpfnodeconfiginit-29a5f589ece7ae9a.md) | 1 declarations |
| [`Method: IsBackendEnabled`](member-method--isbackendenabled-34096ca9d61d48d2.md) | 1 declarations |
| [`Method: IsLoopbackSupported`](member-method--isloopbacksupported-b7e1c5e04981acb5.md) | 1 declarations |
| [`Method: JobInit`](member-method--jobinit-b74e4ebf184e656d.md) | 1 declarations |
| [`Method: JobQueueConfigInit`](member-method--jobqueueconfiginit-959cb9278302edea.md) | 1 declarations |
| [`Method: LinearResamplerConfigInit`](member-method--linearresamplerconfiginit-bd781801544452d8.md) | 1 declarations |
| [`Method: Load`](member-method--load-2b78b028f18fb061.md) | 1 declarations |
| [`Method: Loshelf2ConfigInit`](member-method--loshelf2configinit-cfc289870e9e9336.md) | 1 declarations |
| [`Method: LoshelfNodeConfigInit`](member-method--loshelfnodeconfiginit-ea1caec384108640.md) | 1 declarations |
| [`Method: Lpf1ConfigInit`](member-method--lpf1configinit-327f30ab1c85cbbc.md) | 1 declarations |
| [`Method: Lpf2ConfigInit`](member-method--lpf2configinit-4e9623beb286104f.md) | 1 declarations |
| [`Method: LpfConfigInit`](member-method--lpfconfiginit-96eda768fccee082.md) | 1 declarations |
| [`Method: LpfNodeConfigInit`](member-method--lpfnodeconfiginit-02bb76bf4b484828.md) | 1 declarations |
| [`Method: MaResourceManagerJobInit`](member-method--maresourcemanagerjobinit-208a3646e493c4f2.md) | 1 declarations |
| [`Method: MaResourceManagerJobQueueConfigInit`](member-method--maresourcemanagerjobqueueconfiginit-8d8a7835fbe2aaac.md) | 1 declarations |
| [`Method: NodeConfigInit`](member-method--nodeconfiginit-f1285bfb33a00918.md) | 1 declarations |
| [`Method: NodeGraphConfigInit`](member-method--nodegraphconfiginit-491fc309ac50ce01.md) | 1 declarations |
| [`Method: NoiseConfigInit`](member-method--noiseconfiginit-4d113c9436b876a4.md) | 1 declarations |
| [`Method: Notch2ConfigInit`](member-method--notch2configinit-0aa13da2eb94bdea.md) | 1 declarations |
| [`Method: NotchNodeConfigInit`](member-method--notchnodeconfiginit-485aea4ee8b6ae99.md) | 1 declarations |
| [`Method: PannerConfigInit`](member-method--pannerconfiginit-221aedbf1fc9800e.md) | 1 declarations |
| [`Method: Peak2ConfigInit`](member-method--peak2configinit-61e2d1cd07907ff7.md) | 1 declarations |
| [`Method: PeakNodeConfigInit`](member-method--peaknodeconfiginit-1c33b508a1987463.md) | 1 declarations |
| [`Method: PulsewaveConfigInit`](member-method--pulsewaveconfiginit-662b9c0e1458b3c6.md) | 1 declarations |
| [`Method: ResamplerConfigInit`](member-method--resamplerconfiginit-43a5a3689d793e5b.md) | 1 declarations |
| [`Method: ResourceManagerConfigInit`](member-method--resourcemanagerconfiginit-ff587b71dc2f25d8.md) | 1 declarations |
| [`Method: ResourceManagerDataSourceConfigInit`](member-method--resourcemanagerdatasourceconfiginit-17220d738e774fda.md) | 1 declarations |
| [`Method: ResourceManagerPipelineNotificationsInit`](member-method--resourcemanagerpipelinenotificationsinit-132cfd95c0cf5f0b.md) | 1 declarations |
| [`Method: SlotAllocatorConfigInit`](member-method--slotallocatorconfiginit-e16994eff0311c50.md) | 1 declarations |
| [`Method: SoundConfigInit`](member-method--soundconfiginit-ab9625efe98550f2.md) | 1 declarations |
| [`Method: SoundGroupConfigInit`](member-method--soundgroupconfiginit-90d04c4e7f4608a3.md) | 1 declarations |
| [`Method: SpatializerConfigInit`](member-method--spatializerconfiginit-d5350c1a772f611b.md) | 1 declarations |
| [`Method: SpatializerListenerConfigInit`](member-method--spatializerlistenerconfiginit-9f3d3c43a74cac51.md) | 1 declarations |
| [`Method: SplitterNodeConfigInit`](member-method--splitternodeconfiginit-7ba59792eb83f359.md) | 1 declarations |
| [`Method: VolumeDbToLinear`](member-method--volumedbtolinear-f19f154bdb1fe4b6.md) | 1 declarations |
| [`Method: VolumeLinearToDb`](member-method--volumelineartodb-b1429db617dd317f.md) | 1 declarations |
| [`Method: WaveformConfigInit`](member-method--waveformconfiginit-08c5f77e24455893.md) | 1 declarations |
| [`Property: Raw`](member-property--raw-bbd66afaa7be9187.md) | 1 declarations |

## Type declaration

<a id="api-f90eae4c1a703608"></a>
<!-- api: T:Inno.Native.MiniAudio.MiniAudioContext ccfb60f2c6595dd895b594398efcb0d663ad8734b19beef974aa910d27b97846 -->

```csharp
public sealed class Inno.Native.MiniAudio.MiniAudioContext : System.IDisposable, System.IAsyncDisposable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L260).
