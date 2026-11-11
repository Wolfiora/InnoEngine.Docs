---
title: Script compilation and IDE projection
description: Keep logical authoring APIs and real CLR emission consistent under explicit SDK and artifact identities.
uid: architecture.script-compilation
kind: explanation
owners: [Inno.Scripting.Api, Inno.Scripting.Compiler]
contracts: [project.inno-scripting-api, project.inno-scripting-compiler]
---
# Script compilation and IDE projection

InnoEngine exposes a deliberate logical API to project scripts while preserving the original engine CLR identities at runtime. One export model serves two compilation paths, with different outputs and a shared boundary.

## Two paths, one selected API

| Path | Input references | Output |
| --- | --- | --- |
| IDE project | Metadata-only logical facade and explicit framework references | Editor diagnostics and source tooling using logical namespaces. |
| Runtime authoring compilation | Trimmed real-assembly contracts after logical namespace rewriting | Script IL referring to actual engine CLR types. |

The IDE project does not reference real implementation DLLs, so implementation namespaces are unavailable there. Editable Project assemblies use normal project references. Installed plugin dependencies use generated logical metadata references under Library/IDE/PluginReferences; their source topology is not exposed as root IDE projects. Hot compilation does not load facade artifacts into the runtime generation.

Each file's declared logical imports are rewritten to the corresponding implementation namespaces. Both paths enforce the logical-namespace analyzer. Export selection and trimmed signatures establish access; a namespace import alone is not a permission grant.

## Freeze SDK inputs once

The host supplies a compilation environment provider. An operation captures the SDK identity, actual framework references and predefined symbols once, copies its input collections and freezes reference contents before compilation. Language settings and emitter/compiler identities participate in output identity.

Generated IDE projects reference those same framework assemblies and symbols explicitly, disabling implicit framework-reference and symbol injection. They remain ordinary `net10.0` SDK projects using C# 14. They disable inherited parent `Directory.Build.props/targets` before SDK import so an engine checkout's restore/task policies do not take over an embedded game project.

An IDE SDK mismatch is an error requiring regeneration under the selected SDK. The compiler does not choose an installed reference pack heuristically or rewrite the user's SDK selection.

## Check user access before generated emission

First compile user source against the same trimmed contract used by the IDE. Only after that succeeds may generated registration/emission use full metadata from the owning runtime assemblies. Those implementation references enable generated catalogs and serialization access; they do not add members to the user's API or IDE project.

Player compilation binds the selected Support Pack; Editor compilation binds the current authoring host. Framework implementation exclusion uses actual reference-pack assembly identity, not DLL directory location. A self-contained Editor may deploy framework and engine assemblies together.

## Erase authoring annotations deliberately

After semantic binding and before Player target-reference binding, the compiler removes uses of exported Authoring annotations, custom derived annotation declarations and their corresponding imports. The rule follows export metadata and inheritance symbols, not an Editor type-name allowlist.

Authoring compilation and IDE projects retain these annotations. Ordinary serialization declarations retain their persistence semantics. Using an authoring-only type as runtime business state fails instead of pulling Editor binaries into the Player.

## Publish artifacts before activating code

Contract shape and artifact identity are distinct. Actual framework bytes, Roslyn/emitter identity and options can invalidate an artifact even if public signatures are unchanged. Private staging and atomic publication preserve complete previous caches on precommit failure or cancellation.

A complete cache can exist after a postcommit cleanup error while the operation still fails. It is not an activated generation. [The reload owner](script-reload.md) separately prepares candidates, restores domain state, commits publication and verifies retirement.
