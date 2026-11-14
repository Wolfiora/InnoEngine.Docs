---
uid: api.directory.scripting.runtime
title: "Runtime"
kind: landing
owners: []
---

# Runtime

Find types in this declared script scope. Each type links to its exact declarations and member contracts.

## A

| Type | Purpose |
| --- | --- |
| [AllowMultipleComponentAttribute](allowmultiplecomponentattribute/index.md) | Allows multiple instances of a concrete component type on one game object. |
| [AllowMultipleSystemAttribute](allowmultiplesystemattribute/index.md) | Allows multiple instances of a concrete T:InnoEngine.Scene.GameSystem type in one scene. |
| [Animation](animation/index.md) | Provides script-friendly animation control through the current runtime context. |
| [AnimationBindingId](animationbindingid/index.md) | Identifies one backend-neutral value destination inside an animation binding scope. |
| [AnimationBindingProvider](animationbindingprovider/index.md) | Applies one declared binding protocol on the owner thread; implementations never run in native callbacks. |
| [AnimationBindingProviderAttribute](animationbindingproviderattribute/index.md) | Declares a stable, automatically discovered animation destination protocol. |
| [AnimationClipAsset](animationclipasset/index.md) | Represents one imported backend-neutral collection of tracks and event markers. |
| [AnimationClock](animationclock/index.md) | Selects the session clock used to advance an animation playback. |
| [AnimationEventMarker](animationeventmarker/index.md) | Stores one stable event marker embedded in an animation clip. |
| [AnimationInterpolation](animationinterpolation/index.md) | Selects how values are sampled between adjacent keyframes. |
| [AnimationKeyframe](animationkeyframe/index.md) | Stores one timestamped value inside an animation track. |
| [AnimationMarkerEvent](animationmarkerevent/index.md) | Publishes a stable marker reached by one animation playback on the main runtime thread. |
| [AnimationPlaybackHandle](animationplaybackhandle/index.md) | Identifies one generation-checked animation playback owned by a runtime service. |
| [AnimationPlaybackState](animationplaybackstate/index.md) | Describes the observable lifecycle of one animation playback. |
| [AnimationPlayOptions](animationplayoptions/index.md) | Stores immutable options used to begin one animation playback. |
| [AnimationSample](animationsample/index.md) | Stores one final blended value emitted for a stable binding identifier. |
| [AnimationTarget](animationtarget/index.md) | Identifies a transient animation destination without retaining the destination object. |
| [AnimationTrack](animationtrack/index.md) | Stores one ordered value track targeting a stable binding. |
| [AnimationValue](animationvalue/index.md) | Stores one backend-neutral scalar, vector, or quaternion animation value. |
| [AnimationValueKind](animationvaluekind/index.md) | Describes the number and interpretation of components in an animation value. |
| [ArtifactLease](artifactlease/index.md) | Keeps one verified immutable artifact generation available for an explicit lifetime. |
| [AssetArtifactInfo](assetartifactinfo/index.md) | Describes one named output in an immutable artifact bundle. |
| [AssetArtifactKey](assetartifactkey/index.md) | Identifies one immutable content-addressed artifact bundle. |
| [AssetChange](assetchange/index.md) | Describes one committed asset database change. |
| [AssetChangeKind](assetchangekind/index.md) | Identifies a committed asset database change. |
| [AssetChangeSet](assetchangeset/index.md) | Contains one atomically committed asset database revision. |
| [AssetDependency](assetdependency/index.md) | Describes a persistent direct dependency on another asset. |
| [AssetImportStatus](assetimportstatus/index.md) | Identifies the current source and import state of an asset. |
| [AssetInfo](assetinfo/index.md) | Provides an immutable public snapshot of one cataloged asset. |
| [AssetLease&lt;TAsset&gt;](assetlease/index.md) | Keeps one canonical asset generation resident for an explicit lifetime. |
| [AssetObject](assetobject/index.md) | Provides the common runtime identity and payload contract for imported assets. |
| [AssetPath](assetpath/index.md) | Addresses one asset without conflating isolated source mounts. |
| [AssetPropertySnapshot](assetpropertysnapshot/index.md) | Contains native properties and automatically captured asset dependencies without retaining their owner or typed object. |
| [AssetReferenceInfo](assetreferenceinfo/index.md) | Provides a stable diagnostic snapshot of references known to the asset pipeline. |
| [AssetReferenceKind](assetreferencekind/index.md) | Identifies a reference source known to the asset pipeline. |
| [AssetReferenceLocation](assetreferencelocation/index.md) | Describes one engine-known reference location for an asset. |
| [AssetResidencyStatistics](assetresidencystatistics/index.md) | Reports current explicit runtime asset residency accounting. |
| [Assets](assets/index.md) | Provides script-facing asset queries through the lookup bound to the current runtime session. |
| [AssetSourceId](assetsourceid/index.md) | Identifies one isolated asset source mount. |
| [AssetSourceKind](assetsourcekind/index.md) | Identifies the durable source role recorded by an asset metadata sidecar. |
| [Audio](audio/index.md) | Provides script-friendly access to the audio service in the current execution context. |
| [AudioBusDefinition](audiobusdefinition/index.md) | Describes one bus and its ordered processor chain in a compiled mixer graph. |
| [AudioBusHandle](audiobushandle/index.md) | Identifies one backend mixer bus within a device generation. |
| [AudioBusId](audiobusid/index.md) | Identifies a mixer bus without imposing a closed bus catalog. |
| [AudioCapabilities](audiocapabilities/index.md) | Describes backend-neutral features and limits for one device generation. |
| [AudioClipAsset](audioclipasset/index.md) | Represents one imported audio source and its compact runtime metadata. |
| [AudioClipHandle](audiocliphandle/index.md) | Identifies one backend clip allocation within a device generation. |
| [AudioClipLoadMode](audiocliploadmode/index.md) | Selects how encoded clip data is prepared for playback. |
| [AudioClipMetadata](audioclipmetadata/index.md) | Describes imported encoded audio independently from its runtime storage path. |
| [AudioCodecId](audiocodecid/index.md) | Identifies encoded audio data without constraining codec providers to a closed enum. |
| [AudioCompletionReason](audiocompletionreason/index.md) | Explains why a voice stopped accepting playback commands. |
| [AudioContentProvider](audiocontentprovider/index.md) | Converts arbitrary host-owned content into backend-neutral emitter and listener snapshots. |
| [AudioContentProviderContext](audiocontentprovidercontext/index.md) | Collects one bounded, atomic provider contribution on the owning control thread. |
| [AudioContentProviderExtensionAttribute](audiocontentproviderextensionattribute/index.md) | Marks a reloadable provider that converts host content into immutable audio snapshots. |
| [AudioDeviceState](audiodevicestate/index.md) | Describes the availability of the active audio output generation. |
| [AudioDistanceModel](audiodistancemodel/index.md) | Selects the distance attenuation model for one spatial voice. |
| [AudioEmitterSnapshot](audioemittersnapshot/index.md) | Describes one immutable source playback request produced by a content provider. |
| [AudioListenerHandle](audiolistenerhandle/index.md) | Identifies one spatial listener within a device generation. |
| [AudioListenerSnapshot](audiolistenersnapshot/index.md) | Describes one immutable listener candidate produced by a content provider. |
| [AudioListenerState](audiolistenerstate/index.md) | Contains one listener transform used by backend spatialization. |
| [AudioMixer](audiomixer/index.md) | Contains one validated backend-neutral mixer graph. |
| [AudioMixerAsset](audiomixerasset/index.md) | Selects a mixer extension and ordered features without defining a game-specific mixing model. |
| [AudioMixerBuilder](audiomixerbuilder/index.md) | Builds and validates an open backend-neutral mixer graph. |
| [AudioMixerExtension](audiomixerextension/index.md) | Builds a base mixer graph on the host control thread. |
| [AudioMixerExtensionAttribute](audiomixerextensionattribute/index.md) | Marks a reloadable extension that creates the base audio mixer graph. |
| [AudioMixerFeature](audiomixerfeature/index.md) | Contributes optional buses and processors to a candidate mixer graph. |
| [AudioMixerFeatureConfiguration](audiomixerfeatureconfiguration/index.md) | Stores one ordered mixer feature selection using only stable data. |
| [AudioMixerFeatureExtensionAttribute](audiomixerfeatureextensionattribute/index.md) | Marks a reloadable extension that contributes to an audio mixer graph. |
| [AudioParameterId](audioparameterid/index.md) | Identifies one processor parameter without imposing a processor-specific enum. |
| [AudioPlaybackState](audioplaybackstate/index.md) | Describes the observable lifecycle of one playback voice. |
| [AudioPlayOptions](audioplayoptions/index.md) | Contains immutable parameters used to create one playback voice. |
| [AudioProcessorConfiguration](audioprocessorconfiguration/index.md) | Describes one ordered processor instance attached to a mixer bus. |
| [AudioProcessorId](audioprocessorid/index.md) | Identifies an audio processor implementation without imposing a closed effect catalog. |
| [AudioProcessorParameter](audioprocessorparameter/index.md) | Stores one neutral numeric parameter assigned to an audio processor. |
| [AudioProjectSettings](audioprojectsettings/index.md) | Stores portable project-wide defaults for audio playback and caching. |
| [AudioSpatialOptions](audiospatialoptions/index.md) | Contains listener-relative positioning and attenuation parameters for one voice. |
| [AudioStatistics](audiostatistics/index.md) | Reports an immutable snapshot of runtime and backend resource usage. |
| [AudioVoiceCompletedEvent](audiovoicecompletedevent/index.md) | Reports one voice terminal transition on the owning runtime&#39;s main-thread event dispatcher. |
| [AudioVoiceHandle](audiovoicehandle/index.md) | Identifies one playback voice within a device generation. |
| [AudioVoiceParameters](audiovoiceparameters/index.md) | Contains mutable voice parameters that can be changed after playback begins. |

## B

| Type | Purpose |
| --- | --- |
| [BinaryAsset](binaryasset/index.md) | Describes an imported opaque binary payload. |

## C

| Type | Purpose |
| --- | --- |
| [Color](color/index.md) | Represents mutable RGBA channels whose constructor clamps finite inputs to \[0, 1\]. |
| [ComputePassBuilder](computepassbuilder/index.md) | Declares compute resource reads and unordered writes. |
| [ComputePipelineDescriptor](computepipelinedescriptor/index.md) | Describes a compute program candidate and reflected interface contract. |
| [ComputePipelineHandle](computepipelinehandle/index.md) | Identifies a backend-neutral compute pipeline object. |
| [ContentReadScope](contentreadscope/index.md) | Exposes ordered content roots through weak, generation-checked identity snapshots for one control-thread operation. |
| [CopyPassBuilder](copypassbuilder/index.md) | Declares explicit resource copy access. |

## D

| Type | Purpose |
| --- | --- |
| [Diagnostic](diagnostic/index.md) | Represents one current issue reported by a compiler, importer, validator, or other diagnostic producer. |
| [DiagnosticLocation](diagnosticlocation/index.md) | Identifies an optional source location associated with a diagnostic. |
| [DiagnosticSeverity](diagnosticseverity/index.md) | Defines the presentation severity of a diagnostic. |

## E

| Type | Purpose |
| --- | --- |
| [EngineObject](engineobject/index.md) | Provides identity and destruction state shared by all managed scene objects. |
| [Event](event/index.md) | Base type for all engine events. |
| [EventDispatcher](eventdispatcher/index.md) | Thread-safe event dispatcher that owns a set of T:InnoEngine.Events.EventHub instances and routes events to hubs in descending P:InnoEngine.Events.EventHub.order. |
| [EventHub](eventhub/index.md) | A disposable subscription hub bound to a single T:InnoEngine.Events.EventDispatcher. |

## F

| Type | Purpose |
| --- | --- |
| [FontAsset](fontasset/index.md) | Represents one imported OpenType font file or collection. |
| [FontMetadata](fontmetadata/index.md) | Describes immutable metadata for an imported OpenType font source. |

## G

| Type | Purpose |
| --- | --- |
| [GameBehavior](gamebehavior/index.md) | Base component for independently enabled scene functionality with frame lifecycle callbacks. |
| [GameComponent](gamecomponent/index.md) | Base type for data and behavior objects attached to a T:InnoEngine.Scene.GameObject. |
| [GameLayer](gamelayer/index.md) | Identifies one of the thirty-two runtime layers available to scene objects. |
| [GameLayerCatalog](gamelayercatalog/index.md) | Stores the named layer catalog and symmetric layer-interaction matrix used by a project. |
| [GameLayerDefinition](gamelayerdefinition/index.md) | Describes one named layer slot in a T:InnoEngine.Scene.GameLayerCatalog snapshot. |
| [GameLayerId](gamelayerid/index.md) | Identifies one project-scoped game layer independently from its compact runtime slot. |
| [GameLayerMask](gamelayermask/index.md) | Stores a compact set of scene layers for rendering, physics, and query filtering. |
| [GameObject](gameobject/index.md) | Represents a scene-owned object and exposes its component-oriented API. |
| [GameScene](gamescene/index.md) | Owns a runtime scene, including its objects, components, hierarchy, and systems. |
| [GameSystem](gamesystem/index.md) | Base type for serializable, ordered scene-level behaviors. |
| [GameTagCatalog](gametagcatalog/index.md) | Stores the project-wide tag definitions used to author and validate scene object assignments. |
| [GenerateSerializationConverterAttribute](generateserializationconverterattribute/index.md) | Requests a compile-time serialization converter for a closed data-transfer type. |
| [GeometryAsset](geometryasset/index.md) | Represents imported geometry without prescribing scene or draw semantics. |
| [GlyphBitmap](glyphbitmap/index.md) | Contains one rasterized glyph as tightly packed 8-bit coverage. |
| [GraphDiagnostic](graphdiagnostic/index.md) | Reports one graph validation problem using stable document identifiers. |
| [GraphDocument](graphdocument/index.md) | Owns neutral graph records and graph-level canvas metadata. |
| [GraphEdgeId](graphedgeid/index.md) | Identifies an edge within one graph document using a stable serialized value. |
| [GraphEdgeRecord](graphedgerecord/index.md) | Stores one typed connection between two graph endpoints. |
| [GraphEndpoint](graphendpoint/index.md) | Identifies one endpoint of a graph edge. |
| [GraphicsApi](graphicsapi/index.md) | Identifies the graphics API family selected by the host without exposing a backend-native enum. Pipelines use this value only for capability-aware choices and target artifact selection; it does not require separate pipeline or shader source… |
| [GraphicsCapabilities](graphicscapabilities/index.md) | Provides an immutable capability snapshot for one device generation. |
| [GraphicsCapability](graphicscapability/index.md) | Declares backend-neutral optional graphics functionality. |
| [GraphicsLimits](graphicslimits/index.md) | Captures device limits used to validate and compile render graphs. |
| [GraphicsPipelineDescriptor](graphicspipelinedescriptor/index.md) | Describes a graphics program candidate and reflected interface contract. |
| [GraphicsPipelineHandle](graphicspipelinehandle/index.md) | Identifies a backend-neutral graphics pipeline object. |
| [GraphicsSettings](graphicssettings/index.md) | Exposes current rendering configuration and immutable device state. |
| [GraphNodeDefinition](graphnodedefinition/index.md) | Describes node presentation and resolves ports without entering graph persistence. |
| [GraphNodeId](graphnodeid/index.md) | Identifies a node within one graph document using a stable serialized value. |
| [GraphNodeRecord](graphnoderecord/index.md) | Stores one node without retaining a CLR type or runtime extension instance. |
| [GraphPortCapacity](graphportcapacity/index.md) | Declares how many edges may connect to a graph port. |
| [GraphPortDefinition](graphportdefinition/index.md) | Describes one dynamically or statically resolved node port. |
| [GraphPortDirection](graphportdirection/index.md) | Declares the direction in which values flow through a graph port. |
| [GraphPortId](graphportid/index.md) | Identifies a port within its owning node definition. |
| [GraphPosition](graphposition/index.md) | Stores a graph-space position independently from any editor UI framework. |
| [GraphSerializedValue](graphserializedvalue/index.md) | Stores one graph property as backend-neutral Inno serialization bytes. |
| [GraphValidationResult](graphvalidationresult/index.md) | Contains deterministic graph validation diagnostics. |
| [GraphValidator](graphvalidator/index.md) | Validates neutral graph topology against generation-scoped node definitions. |

## I

| Type | Purpose |
| --- | --- |
| [IAnimationBindingSink](ianimationbindingsink/index.md) | Receives final backend-neutral samples after runtime blending has completed. |
| [IApplicationStorage](iapplicationstorage/index.md) | Provides asynchronous atomic access to one application-specific persistent sandbox. |
| [Identity](identity/index.md) | Identity payload for an object, carrying persistent id and runtime id. |
| [IdentityDomainId](identitydomainid/index.md) | Identifies one isolated runtime identity namespace within the current process. |
| [IdentityObject](identityobject/index.md) | Provides instance-owned persistent and session-local identity state managed by an T:InnoEngine.Core.IdentityAllocator. |
| [IDiagnosticReporter](idiagnosticreporter/index.md) | Publishes current issues through an owner-bound producer, independently of presentation sinks. |
| [IGraphNodeDefinitionResolver](igraphnodedefinitionresolver/index.md) | Resolves generation-scoped node definitions by stable identifier. |
| [IGraphTypeConversion](igraphtypeconversion/index.md) | Determines whether one graph value type can be converted to another. |
| [IInputService](iinputservice/index.md) | Exposes the current immutable input snapshot to runtime systems and scripts. |
| [Input](input/index.md) | Provides script-friendly access to the current frame&#39;s input snapshot. |
| [InputSnapshot](inputsnapshot/index.md) | Captures immutable keyboard and pointer state at one runtime frame boundary. |
| [IPreparedViewDrawable](ipreparedviewdrawable/index.md) | Encodes a resource-ready draw into the owning model&#39;s scene pass. |
| [IRenderFrameUploadService](irenderframeuploadservice/index.md) | Streams immutable CPU data into reusable GPU pages for the current frame. |
| [IRenderModel](irendermodel/index.md) | Builds view requests from host output sessions without owning a host window. |
| [IRenderRequestSink](irenderrequestsink/index.md) | Accepts rendering-model-neutral requests without exposing runtime or backend ownership. |
| [IRenderResourceService](irenderresourceservice/index.md) | Resolves neutral assets and provider-owned uploads into opaque resources for the active device generation. |
| [IRenderTextureArtifactSource](irendertextureartifactsource/index.md) | Exposes one or more portable image artifacts owned by an imported asset. |
| [ISerializable](iserializable/index.md) | Marks a reference type whose annotated properties can participate in property-based serialization. |
| [IUiService](iuiservice/index.md) | Provides retained-mode documents and backend-neutral UI frames to scripts and rendering plugins. |
| [IViewContentCollector](iviewcontentcollector/index.md) | Collects all active world-content sources for one exact view. |
| [IViewContentFrameSource](iviewcontentframesource/index.md) | Completes frame-local input after every output has routed its views. |
| [IViewContentSink](iviewcontentsink/index.md) | Receives world items without imposing a rendering-model sort key. |
| [IViewContentSource](iviewcontentsource/index.md) | Contributes model-independent world items to selected views. |
| [IViewDrawable](iviewdrawable/index.md) | Prepares one model-independent drawable for a specific render pass. |
| [IViewPointerTarget](iviewpointertarget/index.md) | Receives pointer input after the rendering model resolves visible draw order. |

## K

| Type | Purpose |
| --- | --- |
| [KeyCode](keycode/index.md) | Represents a backend-neutral physical key used by runtime input and editor shortcut contracts. |
| [KeyModifier](keymodifier/index.md) | Identifies the supported key modifier values for this contract. |

## L

| Type | Purpose |
| --- | --- |
| [Log](log/index.md) | Writes logs with compiler-provided locations and explicitly declared type ownership across managed deployments. |
| [LogSessionId](logsessionid/index.md) | Identifies the isolated runtime session that produced a log entry. |

## M

| Type | Purpose |
| --- | --- |
| [MaterialAsset](materialasset/index.md) | Represents material state keyed by stable shader property identifiers. |
| [MaterialMetadataEntry](materialmetadataentry/index.md) | Stores one open material metadata key and value. |
| [MaterialPassResolution](materialpassresolution/index.md) | Describes one capability-compatible material pass selection. |
| [MaterialPassResolver](materialpassresolver/index.md) | Resolves materials through open provider-owned shader contracts and roles. |
| [MaterialPropertyBlock](materialpropertyblock/index.md) | Holds frame-local material overrides without modifying a shared asset. |
| [MaterialPropertyEntry](materialpropertyentry/index.md) | Stores one persistent material property entry. |
| [MaterialValue](materialvalue/index.md) | Stores one native-serializable material value without a GPU binding. |
| [MaterialValueKind](materialvaluekind/index.md) | Identifies the neutral value stored by a material property. |
| [MathHelper](mathhelper/index.md) | Contains commonly used precalculated values and mathematical operations. |
| [Matrix](matrix/index.md) | Represents a mutable four-by-four transformation matrix using column-vector multiplication. |
| [MouseButton](mousebutton/index.md) | Identifies the supported mouse button values for this contract. |

## O

| Type | Purpose |
| --- | --- |
| [OnSerializableRestored](onserializablerestored/index.md) | Marks one nonvirtual instance method to run after restoration succeeds, optionally receiving its SerializationContext. |

## P

| Type | Purpose |
| --- | --- |
| [PersistentBufferDescriptor](persistentbufferdescriptor/index.md) | Describes a persistent buffer and any vertex/index interpretation required at creation. |
| [PersistentBufferHandle](persistentbufferhandle/index.md) | Identifies a persistent device buffer without exposing a backend-native handle. |
| [PersistentTextureHandle](persistenttexturehandle/index.md) | Identifies a persistent device texture without exposing a backend-native handle. |
| [PrefabAsset](prefabasset/index.md) | Stores a persistent game object subtree that can be instantiated repeatedly. |
| [PrefabInstanceInfo](prefabinstanceinfo/index.md) | Describes the read-only source connection retained by one prefab instance object. |
| [ProjectId](projectid/index.md) | Identifies one project namespace used to qualify project-authored logical names. |
| [ProjectIdentitySettings](projectidentitysettings/index.md) | Stores the editable identity namespace of the current project. |
| [ProjectLocalId](projectlocalid/index.md) | Stores the project-independent portion of one project-scoped identity. |
| [ProjectScopedId](projectscopedid/index.md) | Combines a mutable project namespace with a stable project-independent local identity. |
| [ProjectSettingComposer](projectsettingcomposer-368d84c21c64/index.md) | Defines the non-generic base for a protocol-owned project setting composer. |
| [ProjectSettingComposer&lt;TSetting, TContribution&gt;](projectsettingcomposer-39afdabb8106/index.md) | Lets one setting protocol define deterministic delta capture and multi-contributor composition. |
| [ProjectSettingComposerAttribute](projectsettingcomposerattribute/index.md) | Declares the protocol-owned composer used to combine contributions for one project setting. Settings without a composer retain the default whole-value replacement behavior. |
| [ProjectSettingContribution&lt;TContribution&gt;](projectsettingcontribution/index.md) | Provides one decoded contribution and its immutable composition context. |
| [ProjectSettingContributionContext](projectsettingcontributioncontext/index.md) | Exposes ownership and dependency information while a protocol-owned composer combines one contribution. |
| [ProjectSettingContributionSource](projectsettingcontributionsource/index.md) | Identifies where one setting contribution originated. |
| [ProjectSettingDefinitionAttribute](projectsettingdefinitionattribute/index.md) | Declares a reloadable settings type under one stable protocol identity. |
| [ProjectSettingId](projectsettingid/index.md) | Identifies one host-neutral project setting protocol. |
| [PropertyVisibility](propertyvisibility/index.md) | Defines member participation rules for persistence and runtime access. |

## Q

| Type | Purpose |
| --- | --- |
| [Quaternion](quaternion/index.md) | Represents a rotation as a normalized four-component quaternion. |

## R

| Type | Purpose |
| --- | --- |
| [RasterPassBuilder](rasterpassbuilder/index.md) | Declares raster attachments and resource access. |
| [Rect](rect/index.md) | Represents an axis-aligned rectangle with float coordinates. Coordinates assume Y-axis points upwards (top smaller than bottom). |
| [RectInt](rectint/index.md) | Represents an axis-aligned rectangle with integer coordinates. Coordinates assume Y-axis points upwards (top smaller than bottom). |
| [RenderBindingId](renderbindingid/index.md) | Identifies a shader binding by stable manifest name. |
| [RenderBlendEquation](renderblendequation/index.md) | Selects the arithmetic operation combining source and destination blend terms. |
| [RenderBlendFactor](renderblendfactor/index.md) | Selects one source or destination blend multiplier. |
| [RenderBlendState](renderblendstate/index.md) | Describes independent color and alpha blending without backend-native flags. |
| [RenderBufferDescriptor](renderbufferdescriptor/index.md) | Describes a render-graph buffer independently from a graphics backend. |
| [RenderBufferHandle](renderbufferhandle/index.md) | Identifies a frame-scoped render-graph buffer. |
| [RenderBufferSlice](renderbufferslice/index.md) | Identifies one range in a frame upload page without exposing its persistent backing buffer. |
| [RenderBufferUploadDescriptor](renderbufferuploaddescriptor/index.md) | Describes one CPU-to-GPU buffer upload that remains valid for the current frame only. |
| [RenderBufferUsage](renderbufferusage/index.md) | Declares intended buffer operations for capability and hazard validation. |
| [RenderClearColor](renderclearcolor/index.md) | Stores a linear clear color without depending on an engine math assembly. |
| [RenderCommandEncoder](rendercommandencoder/index.md) | Provides backend-neutral draw, dispatch and copy commands for one compiled pass. |
| [RenderCullMode](rendercullmode/index.md) | Selects triangle culling for a backend-neutral raster pipeline. |
| [RenderDataChannelId](renderdatachannelid/index.md) | Identifies one pipeline-owned frame-data channel without constraining its payload model. |
| [RenderDepthCompare](renderdepthcompare/index.md) | Selects depth comparison for a backend-neutral raster pipeline. |
| [RenderDeviceAllocationCounters](renderdeviceallocationcounters/index.md) | Reports cumulative successful native allocations made by a device&#39;s transient graph resource pools. Pool reuse does not increment these counters; retirement does not decrement them. They are not live resource counts, managed allocation coun… |
| [RenderExtensionStateContext](renderextensionstatecontext/index.md) | Restores neutral render settings through the canonical asset&#39;s actual owner and pinned references. |
| [RenderFeatureConfiguration](renderfeatureconfiguration/index.md) | Stores one ordered feature extension selection using only stable data. |
| [RenderFeatureContext](renderfeaturecontext/index.md) | Supplies one configured feature with frame-scoped graph services. |
| [RenderFeatureExtensionAttribute](renderfeatureextensionattribute/index.md) | Marks a reloadable pipeline feature implementation with a stable extension identifier. |
| [RenderFrameData](renderframedata/index.md) | Carries generation-scoped, frame-only payloads between a request producer and its pipeline. |
| [RenderFrameStatistics](renderframestatistics/index.md) | Reports read-only statistics for the most recently completed render frame. |
| [RenderFrontFace](renderfrontface/index.md) | Selects the winding order interpreted as the front face. |
| [RenderGeometry](rendergeometry/index.md) | Provides generation-scoped GPU buffers for an imported geometry helper asset. |
| [RenderGeometrySection](rendergeometrysection/index.md) | Describes one indexed range in resolved backend-neutral geometry. |
| [RenderGraphBuilder](rendergraphbuilder/index.md) | Builds one generation-scoped render graph from explicit passes and resources. |
| [RenderGraphDiagnostic](rendergraphdiagnostic/index.md) | Reports one structured render-graph compilation problem. |
| [RenderGraphMutationScope](rendergraphmutationscope/index.md) | Owns isolated graph additions; earlier pass declarations are frozen and failure removes every addition. |
| [RenderGraphNameScope](rendergraphnamescope/index.md) | Owns one nested diagnostic-name prefix in a render graph builder. |
| [RenderIndexFormat](renderindexformat/index.md) | Selects the integer representation of an index buffer. |
| [RenderLoadAction](renderloadaction/index.md) | Controls how existing attachment contents enter a raster pass. |
| [RenderMaterialPass](rendermaterialpass/index.md) | Represents one frame-resolved material pass and its material-owned bindings. |
| [RenderModelExtensionAttribute](rendermodelextensionattribute/index.md) | Marks a reloadable rendering model with a stable identity. |
| [RenderModelOutput](rendermodeloutput/index.md) | Gets one model&#39;s prepared pipeline data for a host-owned target. |
| [RenderOutputInput](renderoutputinput/index.md) | Frame-local input located in the output viewport&#39;s physical pixels. |
| [RenderOutputLayer](renderoutputlayer/index.md) | Assigns exactly one rendering model and its world-content sources to an output layer. |
| [RenderOutputRoute](renderoutputroute/index.md) | States the exact model order and exclusive world-content assignment for one output. |
| [RenderOutputSession](renderoutputsession/index.md) | Declares a host output without naming a camera or scene model. |
| [RenderPassBuilder](renderpassbuilder/index.md) | Provides ordering and common resource declarations for one pass. |
| [RenderPassContext](renderpasscontext/index.md) | Supplies the command encoder and immutable frame identity to a pass callback. |
| [RenderPassExecute&lt;TPassData&gt;](renderpassexecute/index.md) | Executes one frame-scoped pass payload. |
| [RenderPassKind](renderpasskind/index.md) | Distinguishes pass command domains for validation and backend execution. |
| [RenderPassRecordingMode](renderpassrecordingmode/index.md) | Controls where a frame-local pass callback records backend-neutral commands. |
| [RenderPersistentResourceId](renderpersistentresourceid/index.md) | Identifies one provider-owned persistent GPU resource without exposing a native handle. |
| [RenderPhaseId](renderphaseid/index.md) | Identifies an open render phase protocol value. |
| [RenderPipeline](renderpipeline/index.md) | Builds frame-local passes without prescribing a rendering model. |
| [RenderPipelineAsset](renderpipelineasset/index.md) | Selects a pipeline extension and ordered feature configuration without defining a render path. |
| [RenderPipelineContext](renderpipelinecontext/index.md) | Supplies one request and frame-scoped services to a render pipeline. |
| [RenderPipelineExtensionAttribute](renderpipelineextensionattribute/index.md) | Marks a reloadable render pipeline implementation with a stable extension identifier. |
| [RenderPipelineFeature](renderpipelinefeature/index.md) | Adds capability-aware passes without owning frame graph state. |
| [RenderPresentationSize](renderpresentationsize/index.md) | Stores one backend-neutral presentation extent in physical pixels. |
| [RenderPrimitiveTopology](renderprimitivetopology/index.md) | Selects the primitive assembly used by raster draw commands. |
| [RenderRasterState](renderrasterstate/index.md) | Stores backend-neutral fixed-function raster state. |
| [RenderRequest](renderrequest/index.md) | Requests one pipeline-defined rendering operation without prescribing world semantics. |
| [RenderRequestProvider](renderrequestprovider/index.md) | Produces arbitrary render requests without prescribing a scene or rendering model. |
| [RenderRequestProviderContext](renderrequestprovidercontext/index.md) | Supplies frame timing, capabilities and the request sink to one provider invocation. |
| [RenderRequestProviderExtensionAttribute](renderrequestproviderextensionattribute/index.md) | Marks a reloadable provider that produces model-neutral render requests each frame. |
| [RenderResourceId](renderresourceid/index.md) | Identifies a pipeline-defined semantic resource without imposing a central resource catalog. |
| [RenderResourceMap](renderresourcemap/index.md) | Stores open semantic graph resources for one pipeline request. |
| [RenderSamplerAddressMode](rendersampleraddressmode/index.md) | Selects texture addressing independently for each coordinate axis. |
| [RenderSamplerFilter](rendersamplerfilter/index.md) | Selects texture filtering independently from a graphics backend. |
| [RenderSamplerState](rendersamplerstate/index.md) | Describes one native-serializable backend-neutral sampler binding. |
| [RenderShaderArtifact](rendershaderartifact/index.md) | Contains one immutable, source-free shader artifact ready for runtime GPU resource creation. |
| [RenderShaderBindingDescriptor](rendershaderbindingdescriptor/index.md) | Declares one manifest-derived shader binding used for reflection validation. |
| [RenderShaderBindingKind](rendershaderbindingkind/index.md) | Identifies a shader interface binding domain. |
| [RenderShaderPassArtifact](rendershaderpassartifact/index.md) | Carries one immutable compiled shader pass and its reflected runtime bindings. |
| [RenderShaderStageArtifact](rendershaderstageartifact/index.md) | Stores one immutable target shader stage without retaining authoring source or compiler state. |
| [RenderShaderVariant](rendershadervariant/index.md) | Identifies one deterministic selection of static shader keyword options shared by authoring and runtime. |
| [RenderStencilCompare](renderstencilcompare/index.md) | Selects the comparison applied to stencil reference and stored values. |
| [RenderStencilFaceState](renderstencilfacestate/index.md) | Describes stencil behavior for one triangle face orientation. |
| [RenderStencilOperation](renderstenciloperation/index.md) | Selects the update applied to a stencil value. |
| [RenderStencilState](renderstencilstate/index.md) | Describes complete two-sided stencil state for one draw. |
| [RenderStorageAccess](renderstorageaccess/index.md) | Selects unordered storage-resource access for one shader binding. |
| [RenderStoreAction](renderstoreaction/index.md) | Controls whether attachment contents remain valid after a raster pass. |
| [RenderSurfaceHandle](rendersurfacehandle/index.md) | Identifies a persistent presentation surface without exposing a backend framebuffer or swapchain handle. |
| [RenderTarget](rendertarget/index.md) | Selects one render destination without exposing a swapchain or framebuffer handle. |
| [RenderTargetArtifactStatus](rendertargetartifactstatus/index.md) | Describes the current availability of one target-specific rendering artifact. |
| [RenderTargetKind](rendertargetkind/index.md) | Identifies whether a request renders to the main swapchain or an offscreen target. |
| [RenderTexture](rendertexture/index.md) | Describes a persistent offscreen target without owning a backend-native handle. |
| [RenderTextureArtifactReference](rendertextureartifactreference/index.md) | Identifies one immutable texture source across authoring, deployment, and runtime generations. |
| [RenderTextureArtifactSlot](rendertextureartifactslot/index.md) | Declares an immutable source artifact that is compiled into one sampled texture slot. |
| [RenderTextureContainer](rendertexturecontainer/index.md) | Identifies a portable encoded texture container accepted by a render device. |
| [RenderTextureDescriptor](rendertexturedescriptor/index.md) | Describes a render-graph texture independently from a graphics backend. |
| [RenderTextureDimension](rendertexturedimension/index.md) | Identifies the dimensional shape of a backend-neutral texture resource. |
| [RenderTextureFormat](rendertextureformat/index.md) | Declares backend-neutral texture storage formats. |
| [RenderTextureHandle](rendertexturehandle/index.md) | Identifies a frame-scoped render-graph texture. |
| [RenderTextureReadbackHandle](rendertexturereadbackhandle/index.md) | Identifies one backend-neutral asynchronous texture readback operation. |
| [RenderTextureReadbackResult](rendertexturereadbackresult/index.md) | Contains immutable bytes copied from one complete texture mip. |
| [RenderTextureRegion](rendertextureregion/index.md) | Describes one texture subresource box for copy and blit commands. |
| [RenderTextureSubresourceData](rendertexturesubresourcedata/index.md) | Stores one complete texture mip and addressable layer, slice, or cubemap-face upload. |
| [RenderTextureUsage](rendertextureusage/index.md) | Declares intended texture operations for capability and hazard validation. |
| [RenderUniformType](renderuniformtype/index.md) | Identifies the native-independent shape of one uniform binding. |
| [RenderVertexAttribute](rendervertexattribute/index.md) | Describes one vertex attribute in stream order. |
| [RenderVertexFormat](rendervertexformat/index.md) | Identifies one packed vertex attribute representation. |
| [RenderVertexLayout](rendervertexlayout/index.md) | Defines one interleaved vertex stream independently from a graphics backend. |
| [RenderVertexSemantic](rendervertexsemantic/index.md) | Identifies one backend-neutral vertex attribute semantic. |
| [RenderView](renderview/index.md) | Describes one backend-neutral view produced by a rendering model. |
| [RenderViewport](renderviewport/index.md) | Defines a destination pixel rectangle without assuming producer or rendering semantics. |
| [RenderViewTransform](renderviewtransform/index.md) | Stores backend-ready column-major transform matrices for one programmable view. |
| [RequiresSerializationConverterAttribute](requiresserializationconverterattribute/index.md) | Requires a serializable type to use an explicitly discovered converter. |
| [RetentionScope](retentionscope/index.md) | Owns multiple asset, artifact, or subsystem leases as one reverse-order lifetime. |
| [RuntimeIdentity](runtimeidentity/index.md) | Addresses a live identity object within one explicitly identified runtime domain. |

## S

| Type | Purpose |
| --- | --- |
| [SceneAsset](sceneasset/index.md) | Stores imported scene source that can create independent runtime scenes. |
| [SceneManager](scenemanager/index.md) | Provides Unity-style scene operations by resolving the world in the current runtime execution context. |
| [SelectedViewContentCollector](selectedviewcontentcollector/index.md) | Restricts a neutral world-content collector to an output layer&#39;s source IDs. |
| [SerializablePropertyAttribute](serializablepropertyattribute/index.md) | Declares a field or property as participating in T:InnoEngine.Serialization.ISerializable property persistence. |
| [SerializationCaptureKeyBuilder](serializationcapturekeybuilder/index.md) | Builds an exact neutral key during one owned synchronous converter capture callback. |
| [SerializationContext](serializationcontext/index.md) | Provides immutable, operation-independent context to serialization converters. |
| [SerializationConverter&lt;T&gt;](serializationconverter/index.md) | Defines the single advanced extension contract for serializing a specific value type. |
| [SerializationReader](serializationreader/index.md) | Reads a structured object during the active deserialization operation. |
| [SerializationRevisionAttribute](serializationrevisionattribute/index.md) | Declares a sealed identity source&#39;s transient revision member, which covers all serialized state and pure getters. |
| [SerializationWriter](serializationwriter/index.md) | Writes a structured object during the active serialization operation. |
| [SerializedAudioExtensionState](serializedaudioextensionstate/index.md) | Stores reload-safe configuration for one mixer or feature extension generation. |
| [SerializedProperty](serializedproperty/index.md) | Represents a discoverable property in editor and persistence workflows. |
| [SerializedRenderExtensionState](serializedrenderextensionstate/index.md) | Stores reload-safe configuration for one pipeline or feature extension generation. |
| [Settings](settings/index.md) | Provides script-facing project settings queries through the current runtime execution context. |
| [ShaderAsset](shaderasset/index.md) | Represents the runtime contract imported from a shader graph. |
| [ShaderCompareFunction](shadercomparefunction/index.md) | Selects the comparison used by depth testing. |
| [ShaderContractId](shadercontractid/index.md) | Identifies an open shader and pipeline compatibility contract. |
| [ShaderCullMode](shadercullmode/index.md) | Selects the triangle face rejected by a raster pass. |
| [ShaderDefinition](shaderdefinition/index.md) | Contains the source-of-truth definition shared by shader import and material tooling. |
| [ShaderDiagnostic](shaderdiagnostic/index.md) | Reports one structured shader validation or compilation issue. |
| [ShaderInterface](shaderinterface/index.md) | Stores the manifest-derived binding contract verified after backend program creation. |
| [ShaderInterfaceBinding](shaderinterfacebinding/index.md) | Describes one reflected material binding expected by compiled programs. |
| [ShaderKeywordDefinition](shaderkeyworddefinition/index.md) | Declares one static shader keyword that may produce compiled variants. |
| [ShaderMetadataEntry](shadermetadataentry/index.md) | Stores one open metadata key and value. |
| [ShaderPassDefinition](shaderpassdefinition/index.md) | Defines one backend-neutral raster or compute shader pass. |
| [ShaderPassRoleId](shaderpassroleid/index.md) | Identifies an open pass purpose defined by a rendering provider. |
| [ShaderProgramKind](shaderprogramkind/index.md) | Selects the programmable stage combination of a pass. |
| [ShaderPropertyBindingKind](shaderpropertybindingkind/index.md) | Defines how one shader property enters the backend-neutral resource interface. |
| [ShaderPropertyBindingOwner](shaderpropertybindingowner/index.md) | Identifies which layer supplies a declared shader property&#39;s value for each dispatch or draw. |
| [ShaderPropertyDefinition](shaderpropertydefinition/index.md) | Declares one shader property and its reflected stage visibility. |
| [ShaderPropertyId](shaderpropertyid/index.md) | Identifies a material property using a stable serialized string. |
| [ShaderPropertyType](shaderpropertytype/index.md) | Identifies an artist-facing shader property type. |
| [ShaderRenderState](shaderrenderstate/index.md) | Declares backend-neutral fixed-function state for one shader pass. |
| [ShaderSourceLocation](shadersourcelocation/index.md) | Maps a shader diagnostic back to an asset, pass, stage, and source position. |
| [ShaderStage](shaderstage/index.md) | Identifies a programmable shader stage. |
| [ShaderTechniqueDefinition](shadertechniquedefinition/index.md) | Declares one contract-compatible pass mapping selectable by materials. |
| [ShaderTechniqueId](shadertechniqueid/index.md) | Identifies one material-selectable technique in a shader. |
| [ShaderTechniquePass](shadertechniquepass/index.md) | Maps one provider-defined role to one concrete shader pass. |
| [StableTypeIdAttribute](stabletypeidattribute/index.md) | Defines a stable identity for a type, used by persistence and hot-reload remapping. |
| [Storage](storage/index.md) | Provides script-friendly access to the current application storage sandbox. |
| [StorageKey](storagekey/index.md) | Identifies one sandbox-relative application storage value. |

## T

| Type | Purpose |
| --- | --- |
| [Text](text/index.md) | Provides script-friendly access to Unicode shaping and glyph rasterization. |
| [TextAsset](textasset/index.md) | Stores decoded text content and its language hint. |
| [TextDirection](textdirection/index.md) | Selects the logical direction used by the shaping engine. |
| [TextFontStyle](textfontstyle/index.md) | Selects the typographic slant requested from a font face. |
| [TextGlyph](textglyph/index.md) | Describes one positioned glyph emitted by Unicode shaping. |
| [TextLayout](textlayout/index.md) | Contains immutable positioned glyphs and aggregate bounds for one shaped string. |
| [TextMetrics](textmetrics/index.md) | Describes scalable metrics for one font face and logical size. |
| [TextShapingOptions](textshapingoptions/index.md) | Defines language and script hints for one shaping operation. |
| [TextStyle](textstyle/index.md) | Defines immutable font selection and sizing for one shaping operation. |
| [TextureAsset](textureasset/index.md) | Represents imported texture content without owning a GPU handle. |
| [TextureColorSpace](texturecolorspace/index.md) | Selects how texture samples are decoded for shader use. |
| [Time](time/index.md) | Provides Unity-style timing values for the runtime session bound to the current execution context. |
| [Transform](transform/index.md) | Stores local transform data and exposes the scene hierarchy relationship. |

## U

| Type | Purpose |
| --- | --- |
| [UI](ui/index.md) | Provides script-friendly retained-mode UI operations. |
| [UiClipRectangle](uicliprectangle/index.md) | Defines an integer clipping rectangle in UI surface coordinates. |
| [UiContextHandle](uicontexthandle/index.md) | Identifies one UI context owned by the active UI service generation. |
| [UiContextOptions](uicontextoptions/index.md) | Defines one independent UI layout and interaction surface. |
| [UiDocumentAsset](uidocumentasset/index.md) | Represents one imported, language-tagged UI document source. |
| [UiDocumentFontFace](uidocumentfontface/index.md) | Identifies one imported font face owned by a single UI document. |
| [UiDocumentFragment](uidocumentfragment/index.md) | Contains a language-tagged fragment for a backend-specific document mutation. |
| [UiDocumentHandle](uidocumenthandle/index.md) | Identifies one document owned by a UI context. |
| [UiDocumentLanguageId](uidocumentlanguageid/index.md) | Identifies a document source language independently from any UI backend implementation. |
| [UiDocumentSource](uidocumentsource/index.md) | Contains immutable text in one explicitly selected UI document language. |
| [UiDrawCommand](uidrawcommand/index.md) | Describes one draw of a previously published mesh. |
| [UiEvent](uievent/index.md) | Describes one queued document event after a context update. |
| [UiEventType](uieventtype/index.md) | Identifies one document event made visible to game code. |
| [UiExecutionContext](uiexecutioncontext/index.md) | Binds one UI service to the current asynchronous execution context. |
| [UiInputSnapshot](uiinputsnapshot/index.md) | Carries one immutable input snapshot across the UI backend boundary. |
| [UiMeshHandle](uimeshhandle/index.md) | Identifies one backend-owned immutable mesh generation. |
| [UiMeshUpdate](uimeshupdate/index.md) | Publishes one immutable mesh generation to a rendering plugin. |
| [UiRenderFrame](uirenderframe/index.md) | Contains incremental resource changes and ordered draw commands for one UI context. |
| [UiTextureData](uitexturedata/index.md) | Contains immutable RGBA8 texture pixels addressable by a document source name. |
| [UiTextureHandle](uitexturehandle/index.md) | Identifies one backend-owned immutable texture generation. |
| [UiTextureUpdate](uitextureupdate/index.md) | Publishes one immutable premultiplied RGBA8 texture generation. |
| [UiVertex](uivertex/index.md) | Describes one vertex in backend-neutral UI draw geometry. |

## V

| Type | Purpose |
| --- | --- |
| [Vector2](vector2/index.md) | Represents a mutable vector2 value with component-wise arithmetic semantics. |
| [Vector2Int](vector2int/index.md) | Represents a mutable vector2int value with component-wise arithmetic semantics. |
| [Vector3](vector3/index.md) | Represents a mutable vector3 value with component-wise arithmetic semantics. |
| [Vector3Int](vector3int/index.md) | Represents a mutable vector3int value with component-wise arithmetic semantics. |
| [Vector4](vector4/index.md) | Represents a mutable vector4 value with component-wise arithmetic semantics. |
| [Vector4Int](vector4int/index.md) | Represents a mutable vector4int value with component-wise arithmetic semantics. |
| [ViewContentContext](viewcontentcontext/index.md) | Supplies one content source with the host-selected scene roots and an exact view. |
| [ViewContentItem](viewcontentitem/index.md) | One world item supplied to a rendering model without choosing its sort policy. |
| [ViewContentSourceExtensionAttribute](viewcontentsourceextensionattribute/index.md) | Discovers an independently reloadable world-content source. |

