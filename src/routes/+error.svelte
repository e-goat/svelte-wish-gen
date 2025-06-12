<script lang="ts">
    import { onMount } from 'svelte';
    onMount(() => {
        document.title = '404 - Page Not Found';
            const container: HTMLElement | null = document.querySelector('.container');
            if (container) {
                container.style.opacity = '0';
                container.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    container.style.transition = 'all 0.6s ease';
                    container.style.opacity = '1';
                    container.style.transform = 'translateY(0)';
                }, 100);
            }
    });
</script>
<div class="container">
    <div class="icon">🔍</div>
    <div class="error-number">404</div>
    <h1 class="error-title">Oops! Page Not Found</h1>
    <p class="error-message">
        The page you're looking for seems to have wandered off. 
        Don't worry, it happens to the best of us!
    </p>
    
    <div class="action-buttons">
        <a href="/" class="btn btn-primary">🏠 Go Home</a>
        <button on:click={() => history.back()} class="btn btn-secondary">← Go Back</button>
    </div>
</div>
<style>
    .container {
        background: white;
        border-radius: 24px;
        padding: 60px 40px;
        max-width: 500px;
        width: 100%;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .error-number {
        font-size: 120px;
        font-weight: 800;
        color: #667eea;
        line-height: 1;
        margin-bottom: 20px;
        text-shadow: 0 4px 8px rgba(102, 126, 234, 0.2);
    }

    .error-title {
        font-size: 32px;
        font-weight: 700;
        color: #333;
        margin-bottom: 16px;
    }

    .error-message {
        font-size: 18px;
        color: #666;
        line-height: 1.6;
        margin-bottom: 40px;
    }

    .action-buttons {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
    }

    .btn {
        padding: 16px 32px;
        border-radius: 50px;
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        cursor: pointer;
        border: none;
        min-width: 200px;
    }

    .btn-primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }

    .btn-secondary {
        background: transparent;
        color: #667eea;
        border: 2px solid #667eea;
    }

    .btn-secondary:hover {
        background: #667eea;
        color: white;
        transform: translateY(-2px);
    }

    .icon {
        font-size: 80px;
        margin-bottom: 30px;
        opacity: 0.8;
    }

    @media (max-width: 480px) {
        .container {
            padding: 40px 30px;
        }
        
        .error-number {
            font-size: 80px;
        }
        
        .error-title {
            font-size: 24px;
        }
        
        .error-message {
            font-size: 16px;
        }
    }
</style>