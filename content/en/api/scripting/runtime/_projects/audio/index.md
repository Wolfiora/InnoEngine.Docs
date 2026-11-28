---
uid: api.directory.scripting.runtime._projects.audio
title: "Audio"
kind: landing
owners: []
---

# Audio

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [Audio](../../audio/index.md) | Provides script-friendly access to the audio service in the current execution context. |
| [AudioBlockProcessor](../../audioblockprocessor/index.md) | Processes interleaved floating-point samples for one mixer bus on the audio control thread. |
| [AudioBlockProcessorAttribute](../../audioblockprocessorattribute/index.md) | Associates an external sample processor with its stable mixer protocol ID. |
| [AudioBusDefinition](../../audiobusdefinition/index.md) | Describes one bus and its ordered processor chain in a compiled mixer graph. |
| [AudioBusHandle](../../audiobushandle/index.md) | Identifies one backend mixer bus within a device generation. |
| [AudioBusID](../../audiobusid/index.md) | Identifies a mixer bus without imposing a closed bus catalog. |
| [AudioCapabilities](../../audiocapabilities/index.md) | Describes backend-neutral features and limits for one device generation. |
| [AudioClipAsset](../../audioclipasset/index.md) | Represents one imported audio source and its compact runtime metadata. |
| [AudioClipDescriptor](../../audioclipdescriptor/index.md) | Describes one immutable encoded audio artifact presented to a backend device. |
| [AudioClipHandle](../../audiocliphandle/index.md) | Identifies one backend clip allocation within a device generation. |
| [AudioClipLoadMode](../../audiocliploadmode/index.md) | Selects how encoded clip data is prepared for playback. |
| [AudioClipMetadata](../../audioclipmetadata/index.md) | Describes imported encoded audio independently from its runtime storage path. |
| [AudioCodecID](../../audiocodecid/index.md) | Identifies encoded audio data without constraining codec providers to a closed enum. |
| [AudioCompletionReason](../../audiocompletionreason/index.md) | Explains why a voice stopped accepting playback commands. |
| [AudioContentProvider](../../audiocontentprovider/index.md) | Converts arbitrary host-owned content into backend-neutral emitter and listener snapshots. |
| [AudioContentProviderContext](../../audiocontentprovidercontext/index.md) | Collects one bounded, atomic provider contribution on the owning control thread. |
| [AudioContentProviderExtensionAttribute](../../audiocontentproviderextensionattribute/index.md) | Marks a reloadable provider that converts host content into immutable audio snapshots. |
| [AudioDeviceState](../../audiodevicestate/index.md) | Describes the availability of the active audio output generation. |
| [AudioDistanceModel](../../audiodistancemodel/index.md) | Selects the distance attenuation model for one spatial voice. |
| [AudioEmitterSnapshot](../../audioemittersnapshot/index.md) | Describes one immutable source playback request produced by a content provider. |
| [AudioListenerHandle](../../audiolistenerhandle/index.md) | Identifies one spatial listener within a device generation. |
| [AudioListenerSnapshot](../../audiolistenersnapshot/index.md) | Describes one immutable listener candidate produced by a content provider. |
| [AudioListenerState](../../audiolistenerstate/index.md) | Contains one listener transform used by backend spatialization. |
| [AudioMixer](../../audiomixer/index.md) | Contains one validated backend-neutral mixer graph. |
| [AudioMixerAsset](../../audiomixerasset/index.md) | Selects a mixer extension and ordered features without defining a game-specific mixing model. |
| [AudioMixerBuilder](../../audiomixerbuilder/index.md) | Builds and validates an open backend-neutral mixer graph. |
| [AudioMixerExtension](../../audiomixerextension/index.md) | Builds a base mixer graph on the host control thread. |
| [AudioMixerExtensionAttribute](../../audiomixerextensionattribute/index.md) | Marks a reloadable extension that creates the base audio mixer graph. |
| [AudioMixerFeature](../../audiomixerfeature/index.md) | Contributes optional buses and processors to a candidate mixer graph. |
| [AudioMixerFeatureConfiguration](../../audiomixerfeatureconfiguration/index.md) | Stores one ordered mixer feature selection using only stable data. |
| [AudioMixerFeatureExtensionAttribute](../../audiomixerfeatureextensionattribute/index.md) | Marks a reloadable extension that contributes to an audio mixer graph. |
| [AudioParameterID](../../audioparameterid/index.md) | Identifies one processor parameter without imposing a processor-specific enum. |
| [AudioPlaybackState](../../audioplaybackstate/index.md) | Describes the observable lifecycle of one playback voice. |
| [AudioPlayOptions](../../audioplayoptions/index.md) | Contains immutable parameters used to create one playback voice. |
| [AudioProcessorConfiguration](../../audioprocessorconfiguration/index.md) | Describes one ordered processor instance attached to a mixer bus. |
| [AudioProcessorID](../../audioprocessorid/index.md) | Identifies an audio processor implementation without imposing a closed effect catalog. |
| [AudioProcessorParameter](../../audioprocessorparameter/index.md) | Stores one neutral numeric parameter assigned to an audio processor. |
| [AudioProjectSettings](../../audioprojectsettings/index.md) | Stores portable project-wide defaults for audio playback and caching. |
| [AudioSpatialOptions](../../audiospatialoptions/index.md) | Contains listener-relative positioning and attenuation parameters for one voice. |
| [AudioStatistics](../../audiostatistics/index.md) | Reports an immutable snapshot of runtime and backend resource usage. |
| [AudioStreamDecoder](../../audiostreamdecoder/index.md) | Opens independent playback cursors for an encoded audio format. |
| [AudioStreamDecoderAttribute](../../audiostreamdecoderattribute/index.md) | Associates an stream decoder with its stable codec protocol ID. |
| [AudioStreamReader](../../audiostreamreader/index.md) | Decodes one playback cursor outside the hardware callback. Its owner serializes reads, seeks and disposal. |
| [AudioVoiceCompletedEvent](../../audiovoicecompletedevent/index.md) | Reports one voice terminal transition on the owning runtime&#39;s main-thread event dispatcher. |
| [AudioVoiceHandle](../../audiovoicehandle/index.md) | Identifies one playback voice within a device generation. |
| [AudioVoiceParameters](../../audiovoiceparameters/index.md) | Contains mutable voice parameters that can be changed after playback begins. |
| [SerializedAudioExtensionState](../../serializedaudioextensionstate/index.md) | Stores reload-safe configuration for one mixer or feature extension generation. |

