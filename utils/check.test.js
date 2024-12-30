import { describe, it, expect, vi } from 'vitest';
import { checkPackageName } from './check.js';
import npmName from 'npm-name';
import chalk from 'chalk';

// Mock npm-name module
vi.mock('npm-name', () => {
    return {
        default: vi.fn()
    };
});

describe('checkPackageName', () => {
    it('should return available true and success message when package name is available', async () => {
        // Mock npmName to return true (package is available)
        npmName.mockResolvedValue(true);
        
        const result = await checkPackageName('available-package');
        
        expect(result.available).toBe(true);
        expect(result.messages).toHaveLength(1);
        expect(result.messages[0]).toContain('available-package');
        expect(result.messages[0]).toContain('is available');
    });

    it('should return available false and taken message when package name is taken', async () => {
        // Mock npmName to return false (package is taken)
        npmName.mockResolvedValue(false);
        
        const result = await checkPackageName('taken-package');
        
        expect(result.available).toBe(false);
        expect(result.messages).toHaveLength(2);
        expect(result.messages[0]).toContain('taken-package');
        expect(result.messages[0]).toContain('already taken');
        expect(result.messages[1]).toContain('https://www.npmjs.com/package/taken-package');
    });

    it('should handle errors gracefully', async () => {
        // Mock npmName to throw an error
        npmName.mockRejectedValue(new Error('Network error'));
        
        const result = await checkPackageName('error-package');
        
        expect(result.available).toBe(false);
        expect(result.messages).toHaveLength(1);
        expect(result.messages[0]).toContain('Error checking package name');
        expect(result.messages[0]).toContain('Network error');
    });
});
