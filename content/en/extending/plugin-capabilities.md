---
# Identity metadata. Set once; other pages reference uid through contracts.
uid: extending.plugin-capabilities
kind: explanation

# Relation metadata. Name actual engine projects and page identities; validation rejects unknown values.
owners: [Inno.Rendering.Runtime, Inno.Rendering.Shaders, Inno.Assets.Pipeline, Inno.Build.Composition]
contracts: [extending.render-frame, extending.shader-nodes, extending.asset-importers, extending.build-distribution]

# Authoring metadata. Edit these fields and the text below.
title: What a source plugin can extend
description: Trace a render pipeline, shader node, file importer and build target from registration to use, and locate the platform boundary for each.
---
# What a source plugin can extend

A package can supply a new rendering pass, shader graph node or file importer using the same C# source across products that expose the required capabilities. A new publication target belongs to the build distribution. Choose the owner by asking who has to understand the result.

| What you want to add | Where the code runs | What consumes the result |
| --- | --- | --- |
| An outline pass | Runtime rendering pipeline | The selected device executes existing draw commands and resource formats. |
| A node that supplies a half-value constant | Editor shader compiler | The target compiler translates the node's typed shader operations. |
| A custom audio file extension | Editor import, followed by runtime playback | The Player reads the exported audio metadata and payload using the selected codec. |
| A new platform in the export target list | Build distribution and toolchain | The platform packager assembles the target Player and its dependencies. |

## Render pipeline and GPU formats

Give a `RenderPipeline` implementation a stable `RenderPipelineExtension` ID. Select that ID in a project's `RenderPipelineAsset`. The rendering runtime resolves the implementation from its type catalog and validates the candidate against the device. A rendering reload switches generations at a frame boundary and retires the previous generation. If a candidate fails validation, the runtime reports a diagnostic and retains the last usable generation when one exists.

An outline pass can use an existing color target and vertex layout. A new texture format or vertex semantic also needs a shared representation, resource or layout validation and a mapping in each backend that supports it. An enum cast cannot give a device that capability. Check the required capabilities when configuring the pipeline and exercise the pass on its intended target. See [render-frame contributions](render-frame.md) and [pipeline assets and materials](../manual/rendering/materials.md).

## Shader graph nodes and material values

Use a reusable graph for an effect expressible with existing nodes. For a new node with its own ports and compilation behavior, an Editor script can implement `IShaderNodeCompiler`. Its stable `definitionID` connects a saved graph node to the active compiler. During compilation, `Lower` writes typed operations through the supplied builder. The [half-value example](shader-nodes.md) emits an existing float constant. The registry owns the compiler generation and retires it through type reload. A duplicate compiler ID rejects the candidate catalog. Compiling a graph whose node compiler is unavailable reports the missing ID.

A node can combine the operations and binding kinds the target already accepts. A new instruction in the intermediate representation (IR) needs validation and target compiler support. A new material property representation also needs a persisted type, a compiler binding and a runtime consumer that can supply the value to the device. A node label or new port alone supplies none of those. Check [typed shader IR](../architecture/shader-ir.md) and the target's compiled output when choosing a representation.

## Source files and Player artifacts

An importer in an `.editor.cs` file declares a stable `AssetImporter` ID and lists the file extensions it accepts. The Editor's asset pipeline discovers it, gives it a source and an output writer, and owns publication of the resulting artifacts. For example, the [audio importer fixture](https://github.com/Wolfiora/InnoEngine/blob/88e13130b1520c238c4352cdbc9163ff3f0d6f1b/tests/product/fixtures/plugin-contracts/Tone.editor.cs.txt) reads `.knobpcm` files. It writes a `runtime` record describing the audio and an `audio-data` payload. The runtime decoder for the codec ID reads that payload in the Player. The Editor importer itself stays in the authoring assembly.

A new suffix can map to an existing artifact format. New payload semantics require a corresponding Player reader or decoder included in the build. Duplicate importer IDs fail discovery. Cancellation or an import error ends the attempt before a successful new output can be published. Keep resources within the import operation, release borrowed artifact leases, and honor the cancellation token so the host can retire the importer generation. See [asset import and output ownership](asset-importers.md).

## Build targets and distribution ownership

The build host constructs a `BuildDistribution` from explicit contributions. A platform contribution supplies its target ID, packager factory, SDK provider and Player Support Pack source. Building a game also requires the corresponding content compiler. The standard distribution provides Windows x64, macOS arm64 and browser WebAssembly targets. A build resolves the selected target, compiles target content and hands the result to its packager. An unregistered target is rejected before packaging.

Adding another shipping platform requires a distribution that registers and ships those pieces, together with the Player's native and managed dependencies. A runtime subsystem starts inside an already selected Player, after that target choice. The distribution owns its registrations across builds. Each build must finish or cancel before the host releases its authoring session and resources. See [build distribution composition](build-distribution.md) and [Player Support Packs](../contributing/support-packs.md).
