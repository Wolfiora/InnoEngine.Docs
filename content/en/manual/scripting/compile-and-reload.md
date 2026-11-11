---
title: Compile and reload project scripts
description: Follow one source snapshot and compilation ticket through activation, recovery and verified retirement.
uid: manual.scripting.compile-and-reload
kind: how-to
owners: [Inno.Editor.Scripting]
contracts: [project.inno-editor-scripting]
---
# Compile and reload project scripts

The Editor treats C# and assembly definitions as authoring assets and builds collectible code from immutable artifact snapshots. Asset Database supplies discovery and change events; the scripting feature does not add a directory scan or separate watcher. Use the existing Scripting Reload actions or a host compilation ticket, not another build/unload queue.

## Keep source identity stable

`.cs` sources retain `.imeta` identity even when parsing fails. Source/type-manifest artifacts and assembly type/diagnostic caches preserve declarations, locations and canonical source facts. `.iasmdef` files are native serialized assets, not JSON; use AssetPipeline.Save and the matching importer.

The nearest parent definition selects the assembly. Without one, `.editor.cs` belongs to Inno.EditorScripts and other C# belongs to Inno.GameScripts. Explicit definitions win. Runtime-to-Editor references, cycles, unknown assemblies and reserved-name conflicts fail before candidate publication. Built-in names do not depend on the project directory name.

Attachable type identity derives from the canonical source's persistent ID unless an explicit StableTypeId takes precedence. A matching file/type name is canonical; one uniquely attachable type can retain source identity with a naming warning. Partial declarations share the canonical source. Multiple unmatched attachable types require separate files or explicit IDs and otherwise produce INNO2001. Moving a source is not permission to invent legacy type aliases.

## Understand project and plugin visibility

Project compilation uses a committed asset catalog. Plugin install/update uses an isolated candidate mount/catalog; it becomes active only after complete compilation and migration. Source fingerprints, syntax trees and plugin input must describe that same revision.

Compiler metadata identifies each assembly's source mount. Use Assets.LocalPath for source-local content; business scripts do not hardcode their future installed Plugin ID. Project `~` directories are ordinary development source, while installed plugin `~` subtrees are importable samples excluded from its active code. Such subtrees are not Player runtime closure.

Only Project assemblies become editable root IDE projects. Installed plugin topology is represented by logical metadata references under `Library/IDE/PluginReferences`, not plugin source projects. SDK projects list explicit Compile/framework/API inputs and keep generated output in Library. IDE projection is a tooling model; actual hot compilation uses Roslyn and the same selected API/catalog inputs.

## Observe one accepted request

`IEditorScriptCompilation.RequestCompilation` returns a request-bound ticket. Observe it at later owner-thread safe points rather than busy-waiting on the UI thread. Only completed Succeeded authorizes dependent work. Another request's old success, an emitted DLL or 80% progress is insufficient.

Progress identifies the operation, fraction, current stage and cancellation capability. CancelCompilation rejects stale operation IDs. Work items report actual completed phases; Roslyn Emit has no internal percentage callback, so a plateau during Emit is normal. Compilation completes before candidate activation, domain restoration and final unload verification. Those later phases remain part of the same request.

While Play has live owners, manual Reload is disabled and automatic changes retain the latest pending request. Waiting does not open a blocking compilation modal or stop the game. Stop Play and let it fully retire, then the latest request can proceed. A rejected request gets a failed ticket without replacing an already accepted one.

## Reuse immutable work without hiding diagnostics

Assembly keys include source content, normalized definitions/options/scope, the selected API contract, mount identity and direct dependency keys. Unrelated importer implementation identity does not invalidate everything. Generation keys combine ordered assembly and plugin content identities; no numeric generation directory is a content identity.

Matching artifacts reuse DLL/PDB/XML/type/diagnostic data and republish cached warnings. Source compilation reuse is separate from collectible lifetime: project Runtime and Editor scripts retire together as one authoring generation, including Editor-only changes, because CLR generic retention can cross contexts. The [reload architecture](../../architecture/script-reload.md) explains that requirement.

Assembly artifact caches have a seven-day grace period and 4 GiB bound; API reference caches have their own seven-day/512 MiB policy and protect active contracts. Cleanup still respects owners. Internal runtime generation IDs do not enter `.imeta`, scene/prefab data or persistent artifact identity.

## Activate and verify the complete candidate

Scripting prepares the module/type/registry candidate and delegates domain recovery to the neutral Editor coordinator. It does not manipulate Scene or Panel types. Participants stop old extensions, clear transient interaction and restore new state before the publication callback completes. Precommit failure rolls back the prepared transactions; postcommit cleanup failure cannot be treated as a successful request.

Compatible members restore old values; new members keep defaults; removed data is ignored for migration; incompatible same-name values keep defaults with INNOHR0001. Ordinary serialization retains strict semantics. Scene participants own Missing placeholders, identity/reference recovery and their current diagnostics. Missing state is not a compiler error or a reason to destroy saved property bytes.

The retirement barrier requires full GC, finalizers and another full GC with weak verification. Ready/Succeeded cannot precede that barrier. A faulted host rejects further requests, closes progress with a real failure and requires restart. Static fields, background work, event subscriptions and external CLR references cannot be automatically migrated; user code must release them through its lifecycle.

Ordinary compile failure preserves the active generation. Removed/unavailable plugins can require explicit retirement of their affected module closure, retaining scene data as Missing; do not mistake that for an ordinary failed candidate with unchanged installed facts. See [plugin troubleshooting](../plugins/troubleshoot.md).

IDE projection follows successful retirement. Its failure is a separate warning about editing assistance, not a retroactive compile/activation failure. Successful runtime assembly paths come from the exact active generation; export must not scan an output directory and accidentally include Editor code.
