import test from 'node:test';
import assert from 'node:assert/strict';
import { isDocumentedProject } from '../scripts/api-scope.mjs';

test('public C# engine and tools are eligible regardless of assembly naming', () => {
  for (const path of ['src/core/Probe.csproj', 'entry/Entry.csproj', 'tools/Checker.csproj', 'build/Build.csproj', 'platforms/Windows/Player.csproj']) {
    assert.equal(isDocumentedProject({ path, isTest: false }), true, path);
  }
});

test('all backends, extern, fixtures and non-C# owners are excluded', () => {
  for (const path of ['backends/Sdl3/runtime/Adapter.csproj', 'backends/Sdl3/native/Bindings.csproj', 'extern/Dependency.csproj', 'tests/fixtures/Probe.csproj', 'src/Native.vcxproj']) {
    assert.equal(isDocumentedProject({ path, isTest: false }), false, path);
  }
  assert.equal(isDocumentedProject({ path: 'tools/Fixture.csproj', isTest: true }), false);
  assert.equal(isDocumentedProject({}), false);
});

test('retired annotations cannot change the approved path and project boundary', () => {
  assert.equal(isDocumentedProject({ path: 'src/Probe.csproj', apiDocumentation: 'backend-native' }), true);
  assert.equal(isDocumentedProject({ path: 'backends/Sdl3/Adapter.csproj', apiDocumentation: 'public-engine' }), false);
});
